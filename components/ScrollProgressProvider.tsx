"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type ScrollContextType = {
    contentLoaded: boolean;
    setContentLoaded: (value: boolean) => void;
};

// Scroll context
export const ScrollContext = createContext<ScrollContextType>({ contentLoaded: false, setContentLoaded: () => {} });

export const useScrollContext = () => useContext(ScrollContext);

// ScrollProgressProvider Component
function ScrollProgress() {
    const [scroll, setScroll] = useState(0);
    const { contentLoaded } = useScrollContext();

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / totalHeight) * 100;

        setScroll(scrollPercent);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [contentLoaded]); // Add contentLoaded as a dependency

    return (
        <div className={"fixed z-50 h-0.5 md:h-1 duration-1000 bg-theme_color dark:bg-theme_color-dark"}
             style={{ width: `${scroll}%` }}>
        </div>
    );
}

type ScrollProviderProps = {
    children: ReactNode;
};

// ScrollProvider Component
export const ScrollProgressProvider = ({ children }: ScrollProviderProps) => {
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        // Any time contentLoaded changes, re-run the effect
    }, [contentLoaded]);

    return (
        <ScrollContext.Provider value={{ contentLoaded, setContentLoaded }}>
            <ScrollProgress /> {/* ScrollProgressProvider is now part of the ScrollProvider */}
            {children}
        </ScrollContext.Provider>
    )
};
