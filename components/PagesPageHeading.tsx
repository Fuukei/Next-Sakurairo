"use client";

import React, { useEffect, useRef } from "react";

interface PagesPageHeadingProps {
    title: string;
}

export default function PagesPageHeading({ title }: PagesPageHeadingProps) {
    const titleRef = useRef<HTMLElement>(null);
    const hrRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (titleRef.current && hrRef.current) {
            const titleWidth = titleRef.current.getBoundingClientRect().width;
            hrRef.current.style.width = `${titleWidth + 20}px`;
        }
    }, [title]);

    return (
        <div className="flex flex-col justify-end items-center min-h-[150px] md:min-h-[200px] overflow-hidden pb-4">
            <h1 ref={titleRef as any}
                className="text-xl md:text-4xl font-bold text-text_color dark:text-text_color-dark"
            >
                {title}
            </h1>
            <hr ref={hrRef as any}
                className="h-0.5 md:mt-2 border-0 rounded bg-theme_color dark:bg-theme_color-dark"
            />
        </div>
    )
}