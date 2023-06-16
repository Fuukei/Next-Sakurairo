"use client";

import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogConfig } from "@/config";
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from "framer-motion";
import Search from "@/components/search/Search";
import SearchTrigger from "@/components/search/SearchTrigger";
import Logo from "@/components/logo/Logo";
import IconButton from "@/components/IconButton";

const navigationItems = blogConfig.navigation;

function MobileMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Dialog.Root onOpenChange={(mobileMenuOpen) => setMobileMenuOpen(mobileMenuOpen)}>
            <Dialog.Trigger>
                <IconButton>
                    <Bars3Icon className={"w-6 h-6"} aria-hidden={"true"}></Bars3Icon>
                </IconButton>
            </Dialog.Trigger>
            <AnimatePresence>
                {mobileMenuOpen ? (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay>
                            <motion.div
                                initial={{ x: '400%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '400%' }}
                                transition={{ ease: 'linear', duration: 0.15 }}
                                className={cn(
                                    "fixed inset-x-0 inset-y-16 h-screen w-1/4",
                                    "bg-slate-800/50"
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
                                    "bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md"
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
                                    <SearchTrigger />
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
            <Search />
            <div onMouseEnter={() => setHeaderHover(true)}
                 onMouseLeave={() => setHeaderHover(false)}
                 className={cn({
                         "md:backdrop-blur-none md:bg-transparent md:dark:bg-transparent": !(headerHover || isScrolled)
                     },
                     "backdrop-blur-md drop-shadow-lg bg-slate-100/80 dark:bg-slate-800/80",
                     "w-full md:rounded-2xl md:mt-5 md:mx-10 px-4 md:px-0 md:py-1 duration-500"
                 )}>
                <div className="hidden md:flex w-full items-center justify-between">
                    <Link href={blogConfig.url}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={cn(
                              "rounded-2xl px-7 pt-2 pb-0"
                          )}>
                        <Logo logoHover={logoHover}/>
                    </Link>

                    <div className={cn(
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
                        <SearchTrigger />
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex md:hidden h-16 w-full items-center justify-between">
                    <Link href={"/"}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={"mt-2"}>
                        <Logo logoHover={logoHover}/>
                    </Link>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}