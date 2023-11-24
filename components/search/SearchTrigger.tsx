"use client";

import { HiSearch } from "react-icons/hi";
import { useSearchStore } from "@/stores/search-store";
import IconButton from "@/components/IconButton";
import {useEffect, useState} from "react";
import { m } from "framer-motion";


export default function SearchTrigger() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

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

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    return (
        <m.div
            className={"fixed z-30 bottom-14 right-0 mr-2 lg:mr-6 mb-8"}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}>
            <IconButton onClick={() => toggleSearch()}>
                <HiSearch className={"w-6 h-6"} aria-hidden={"true"}/>
            </IconButton>
        </m.div>
    )
}