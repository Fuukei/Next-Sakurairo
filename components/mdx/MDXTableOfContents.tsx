"use client";

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

type MDXTableOfContentsProps = {
    raw: string;
};

interface Header {
    text: string;
    level: number;
}

export default function MDXTableOfContents({ raw }: MDXTableOfContentsProps) {
    const [toc, setToc] = useState<Header[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100; // choose your threshold for the scroll position to show the component
            if (show !== isScrolled) {
                setIsScrolled(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

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

    const variants = {
        hidden: { x: 300, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"}
            variants={variants}
            className="p-6 rounded shadow-md fixed top-1/4 right-8 z-30 hidden lg:block"
        >
            <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
            <ul className="list-disc pl-5 space-y-2">
                {toc.map((header, index) => (
                    <li key={index} className={`pl-${header.level - 1}`}>
                        <a href={`#${header.text.toLowerCase().split(' ').join('-')}`} className="text-blue-500 hover:underline">
                            {header.text}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}