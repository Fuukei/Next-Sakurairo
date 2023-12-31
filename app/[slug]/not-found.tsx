"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TbHome } from "react-icons/tb"

export default function NotFound() {
    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-zinc-50/50 dark:bg-zinc-900/70"}>
            <div className={"flex flex-col h-screen justify-center items-center"}>
                <div className={"text-center my-8"}>
                    Page not found
                </div>
                <Link href={"/"}>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        type={"button"}
                        className={cn(
                            "rounded-full px-5 py-2 flex",
                            "bg-white dark:bg-zinc-800/75",
                            "text-text_color dark:text-text_color-dark"
                        )}>
                        <TbHome className={"w-6 h-6 mr-2"}/>
                        Home
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}