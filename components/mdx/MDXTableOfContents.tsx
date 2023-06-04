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
        const headers = lines
            .filter(line => line.startsWith('#'))
            .map(line => {
                const level = line.lastIndexOf('#') + 1;  // Count the number of '#' to determine the level of heading
                const text = line.slice(level).trim();   // Remove '#' characters to get the heading text
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
