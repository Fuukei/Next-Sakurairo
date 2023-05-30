"use client";

import { useState, useEffect } from 'react';
import {ChevronUpIcon} from "@heroicons/react/24/solid";

export default function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button onClick={scrollToTop}
                className={"fixed z-50 bg-slate-50 dark:bg-slate-800 hover:opacity-90 duration-100 rounded-xl bottom-0 right-0 mr-2 lg:mr-6 mb-8"}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0)",
                    transition: 'opacity 0.5s, transform 0.7s',
                }}>
            <ChevronUpIcon className={"text-amber-600 p-1 h-12 w-12"} />
        </button>
    )
}