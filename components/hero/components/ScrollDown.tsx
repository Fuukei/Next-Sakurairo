"use client";

import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ScrollDown() {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth"
        });
    };

    return (
        <div className={"absolute bottom-0 w-full flex justify-center pb-10"}>
            <motion.div
                animate={{
                    y: [0, -5, 0]
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2
                }}
            >
                <button onClick={scrollToNextSection}
                        className={cn(
                            "backdrop-blur-[1px] rounded-3xl focus:outline-none",
                            "text-accent_color dark:text-accent_color-dark opacity-60"
                        )}>
                    <GoChevronDown className="w-14 h-14" />
                </button>
            </motion.div>
        </div>
    )
}
