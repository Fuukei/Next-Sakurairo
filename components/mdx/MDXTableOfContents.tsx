"use client";

import { useEffect, useState } from 'react';

type MDXTableOfContentsProps = {
    raw: string;
};

interface Header {
    text: string;
    level: number;
}

export default function MDXTableOfContents({ raw }: MDXTableOfContentsProps) {
    const [toc, setToc] = useState<Header[]>([]);

    useEffect(() => {
        const lines = raw.split("\n");
        let inCodeBlock = false; // Track if we're inside a code block
        const headers = lines
            .filter(line => {
                if (line.startsWith("```")) {
                    // If line starts with ```, invert the flag
                    inCodeBlock = !inCodeBlock;
                    return false;
                }
                // Only consider as header if we're not inside a code block, line starts with #, and # is followed by a space
                return !inCodeBlock && line.startsWith('#') && line.charAt(line.lastIndexOf('#') + 1) === ' ';
            })
            .map(line => {
                const level = line.lastIndexOf('#') + 1;
                const text = line.slice(level).trim();
                return { text, level };
            });
        setToc(headers);
    }, [raw]);

    return (
        <div>
            <h2>Table of Contents</h2>
            <ul>
                {toc.map((header, index) => (
                    <li key={index}>
                        <a href={`#${header.text.toLowerCase().split(' ').join('-')}`} style={{ marginLeft: (header.level - 1) * 20 }}>
                            {header.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}