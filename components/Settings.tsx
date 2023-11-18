"use client";

import { useState, useEffect, useRef } from "react";
import { HiOutlineCog } from "react-icons/hi";
import { m } from "framer-motion";
import IconButton from "@/components/IconButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Settings() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSlideOutVisible, setSlideOutVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const cogContainerRef = useRef<HTMLDivElement>(null);

    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
            setSlideOutVisible(false);
            setOpen(false);
        } else {
            setIsVisible(false);
        }
    };

    const handleCogClick = () => {
        setSlideOutVisible(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (cogContainerRef.current && !cogContainerRef.current.contains(event.target as Node)) {
            setSlideOutVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    const slideOutVariants = {
        hidden: { x: 0 },
        visible: { x: -60 }
    };

    return (
        <m.div
            ref={cogContainerRef}
            className={"fixed z-30 bottom-0 right-0 mr-2 lg:mr-6 mb-8"}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <m.div
                className={"absolute"}
                variants={slideOutVariants}
                animate={isSlideOutVisible ? "visible" : "hidden"}
            >
                <ThemeToggle open={open} setOpen={setOpen} />
            </m.div>

            <IconButton onClick={handleCogClick} aria-label="settings">
                <HiOutlineCog className={"text-text_color dark:text-text_color-dark w-6 h-6"} />
            </IconButton>
        </m.div>
    )
}
