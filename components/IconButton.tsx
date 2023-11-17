"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type IconButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export default function IconButton({ children, onClick }: IconButtonProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer",
                "backdrop-blur-3xl drop-shadow-lg",
                "bg-zinc-100/80 dark:bg-zinc-800/80 text-text_color dark:text-text_color-dark"
            )}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}
