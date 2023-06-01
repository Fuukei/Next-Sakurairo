"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className={cn(
                "fixed z-40 rounded-xl bottom-0 right-0 mr-2 lg:mr-6 mb-8",
                "bg-slate-50 dark:bg-slate-800",
            )}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}>
            <ChevronUpIcon className={"text-primary_color dark:text-primary_color-dark p-1 h-12 w-12"} />
        </motion.button>
    )
}