"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";


function A({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    if (href && href.startsWith('#')) {
        return <a href={href}>{children}</a>;
    }

    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={200}
                          onOpenChange={(open) => setTooltipOpen(open)}>
                <Tooltip.Trigger asChild>
                    <Link href={href || ''}
                          className="relative inline-flex items-center">
                        {children}
                        <span className="text-md relative -top-1 -right-1">
                            <HiOutlineExternalLink />
                        </span>
                    </Link>
                </Tooltip.Trigger>
                <AnimatePresence>
                    {tooltipOpen && (
                        <Tooltip.Portal forceMount>
                            <Tooltip.Content
                                sideOffset={5}
                                side={"bottom"}
                            >
                                <m.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ ease: "easeOut", duration: 0.3 }}
                                    className={"backdrop-blur-lg drop-shadow-lg bg-zinc-50/60 dark:bg-zinc-900/60 rounded-md"}
                                >
                                    <div className={"text-xs py-1 px-2"}>
                                        {href}
                                    </div>
                                    <Tooltip.Arrow className={"fill-theme_color/70 dark:fill-theme_color-dark/70 backdrop-blur-md"}/>
                                </m.div>
                            </Tooltip.Content>
                        </Tooltip.Portal>

                    )}
                </AnimatePresence>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

const a = A;

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
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ ease: "easeOut", duration: 0.15 }}
                            className={cn(
                                "fixed z-40 inset-0 flex items-center justify-center",
                                "bg-zinc-800/50"
                            )}
                        >
                            <Dialog.Content onEscapeKeyDown={() => setImageOpen(false)}
                                            onInteractOutside={() => setImageOpen(false)}
                                            className="md:p-16">
                                <img src={src} alt={alt} className="z-50 max-h-full max-w-full"/>
                            </Dialog.Content>
                        </m.div>
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
