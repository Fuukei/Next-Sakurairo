"use client";

import { useState, useEffect } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import { motion } from "framer-motion";
import IconButton from "@/components/IconButton";

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
        <motion.div
            onClick={scrollToTop}
            className={"fixed z-30 bottom-28 right-0 mr-2 lg:mr-6 mb-8"}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}>
            <IconButton>
                <BiSolidArrowToTop className={"text-text_color dark:text-text_color-dark w-6 h-6"} />
            </IconButton>
        </motion.div>
    )
}