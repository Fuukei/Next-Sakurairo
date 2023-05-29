"use client";

import { useState, useEffect } from 'react';

export default function ScrollProgress () {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / totalHeight) * 100;

        setScroll(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={"fixed z-50 h-1 duration-1000 bg-amber-600"}
             style={{ width: `${scroll}%` }}>
        </div>
    )
}