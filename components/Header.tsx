"use client";

import { useEffect, useState} from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ThemeToggle from "@/components/ThemeToggle";
import Search from "@/components/search/Search";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogConfig } from "@/config";
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from "framer-motion";
import { allArticles } from "contentlayer/generated";

const navigationItems = blogConfig.navigation;

function MobileMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Dialog.Root onOpenChange={(mobileMenuOpen) => setMobileMenuOpen(mobileMenuOpen)}>
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
                    <Bars3Icon className={"w-6 h-6"} aria-hidden={"true"}></Bars3Icon>
                </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
                {mobileMenuOpen ? (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                className={cn(
                                    "fixed inset-x-0 inset-y-16 h-screen",
                                    "bg-slate-900 dark:bg-slate-500"
                                )}
                            >
                            </motion.div>
                        </Dialog.Overlay>
                        <Dialog.Content>
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ ease: 'linear', duration: 0.15 }}
                                className={cn(
                                    "fixed inset-y-16 right-0 z-40 w-3/4 h-screen px-6 py-6",
                                    "bg-slate-100 dark:bg-slate-900"
                                )}
                            >
                                <div className="flex flex-col items-center justify-between">
                                    {navigationItems.map((item, idx:number) => (
                                        <Link href={item.href} key={idx}>
                                            <div className={"px-2 font-semibold text-primary_color dark:text-primary_color-dark"}>
                                                {item.title}
                                            </div>
                                        </Link>
                                    ))}
                                    <Search articles={allArticles} />
                                    <ThemeToggle />
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    )
}

export default function Header() {
    const [logoHover, setLogoHover] = useState(false);
    const [headerHover, setHeaderHover] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <header className={"fixed flex w-full z-40"}>
            <div onMouseEnter={() => setHeaderHover(true)}
                 onMouseLeave={() => setHeaderHover(false)}
                 className={cn({
                         "md:backdrop-blur-sm md:bg-slate-100/70 md:dark:bg-slate-950/80": headerHover || isScrolled,
                         "md:backdrop-blur-none md:bg-transparent md:dark:bg-transparent": !(headerHover || isScrolled)
                     },
                     "backdrop-blur-sm bg-slate-100/70 dark:bg-slate-950/80",
                     "w-full md:rounded-2xl md:mt-5 md:mx-10 px-4 md:px-0 md:py-1 duration-500"
                 )}>
                <div className="hidden md:flex w-full items-center justify-between">
                    <Link href={"/"}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={cn({
                                  "bg-slate-100/0 dark:bg-slate-950/0": headerHover || isScrolled,
                                  "bg-slate-100/70 dark:bg-slate-950/80": !headerHover && !isScrolled,
                              },
                              "space-x-2 md:rounded-2xl p-4 py-6 md:px-7 duration-500"
                          )}>
                        <span className={cn({
                                "bg-primary_color dark:bg-primary_color-dark": logoHover,
                                "bg-white/40": !logoHover,
                            },
                            "pt-3 pb-1 rounded-xl"
                        )}>
                            Next Sakurairo
                        </span>
                        <span className={"text-primary_color dark:text-primary_color-dark"}>の</span>
                        <span className={"text-primary_color dark:text-primary_color-dark"}>Site</span>
                    </Link>

                    <div className={cn({
                            "bg-slate-100/0 dark:bg-slate-950/0": headerHover || isScrolled,
                            "bg-slate-100/70 dark:bg-slate-950/80": !headerHover && !isScrolled,
                        },
                        "flex items-center md:rounded-2xl md:px-6 md:py-1 space-x-4 duration-500",
                        "text-primary_color dark:text-primary_color-dark"
                    )}>
                        {navigationItems.map((item, idx:number) => (
                            <Link href={item.href} key={idx}>
                                <div className={"px-2 font-semibold text-primary_color dark:text-primary_color-dark"}>
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                        <Search articles={allArticles} />
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex md:hidden w-full items-center justify-between">
                    <Link href={"/"}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={"space-x-2"}>
                        <span className={cn({
                                "bg-amber-400": logoHover,
                                "bg-white/40": !logoHover,
                            },
                            "pt-3 pb-1 rounded-xl"
                        )}>Next Sakurairo</span>
                        <span className={""}>の</span>
                        <span>Site</span>
                    </Link>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}