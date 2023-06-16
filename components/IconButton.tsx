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
                "m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer",
                "bg-slate-50 dark:bg-slate-800 text-primary_color dark:text-primary_color-dark"
            )}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}
