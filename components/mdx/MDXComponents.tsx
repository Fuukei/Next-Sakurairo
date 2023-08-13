"use client";

import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";


function a({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
    if (href && href.startsWith('/')) {
        return <Link href={href}>{children}</Link>;
    }

    if (href && href.startsWith('#')) {
        return <a href={href}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

function ul({ children, className }: React.HTMLProps<HTMLUListElement>) {
    let style = {};

    if (className && className.includes('contains-task-list')) {
        style = { listStyleType: 'none' };
    }

    return <ul style={style}>{children}</ul>;
}

function Img({ src, alt }: React.HTMLProps<HTMLImageElement>) {
    const [imageOpen, setImageOpen] = useState(false)

    return (
        <Dialog.Root onOpenChange={(open) => setImageOpen(open)}>
            <Dialog.Trigger className="flex items-center justify-center h-full mx-auto">
                <img src={src} alt={alt} className="cursor-pointer rounded-lg"/>
            </Dialog.Trigger>
            <AnimatePresence>
                {imageOpen ? (
                    <Dialog.Portal forceMount>
                        <motion.div
                            onClick={() => setImageOpen(false)} // close on click
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ ease: "easeOut", duration: 0.15 }}
                            className={cn(
                                "fixed z-40 inset-0 flex items-center justify-center",
                                "bg-slate-800/50"
                            )}
                        >
                            <Dialog.Content className="md:p-16">
                                <img src={src} alt={alt} className="z-50 max-h-full max-w-full"/>
                            </Dialog.Content>
                        </motion.div>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    );
}

const img = Img;


export const MDXComponents = {
    a,
    ul,
    img
}
