"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import Link from "next/link";

export default function Search() {
    const [searchOpen, setSearchOpen] = useState(false)
    return (
        <Dialog.Root onOpenChange={(searchOpen) => setSearchOpen(searchOpen)}>
            <Dialog.Trigger>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
                        "bg-slate-200 dark:bg-slate-800 text-primary_color dark:text-primary_color-dark"
                    )}
                >
                    <span className="sr-only">Open menu</span>
                    <MagnifyingGlassIcon className={"w-6 h-6"} aria-hidden={"true"}/>
                </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
                {searchOpen ? (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                className={cn(
                                    "fixed z-50 inset-x-0 inset-y-0 h-screen",
                                    "bg-slate-900 dark:bg-slate-500"
                                )}
                            >
                            </motion.div>
                        </Dialog.Overlay>
                        <Dialog.Content>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'linear', duration: 0.15 }}
                                className={cn(
                                    "fixed z-50 px-6 py-6 rounded-xl",
                                    "md:inset-1/4 md:w-1/2 md:h-1/2",
                                    "inset-[10%] w-[80%] h-[85%]",
                                    "bg-slate-100 dark:bg-slate-900"
                                )}
                            >
                                <div className="flex flex-col items-center justify-between">
                                    <Link href={"/"}>
                                        <div className={"px-2 font-semibold text-primary_color dark:text-primary_color-dark"}>
                                            Test
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    )
}