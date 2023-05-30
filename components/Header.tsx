"use client";

import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useEffect, useState} from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const headerItems = [
    {name: "Item1"},
    {name: "Item2"},
    {name: "Item3"},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
                 className={headerHover || isScrolled ?
                     "w-full backdrop-blur-sm md:rounded-2xl md:mt-5 md:mx-10 md:py-1 px-4 md:px-6 bg-slate-100/70 dark:bg-slate-950/80 duration-500" :
                     "w-full md:rounded-2xl md:mt-5 md:mx-10 px-4 md:px-0 md:py-1 duration-500"
            }>
                <div className="hidden md:flex w-full items-center justify-between">
                    <Link href={"/"}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={headerHover || isScrolled ?
                              "space-x-2 duration-500" :
                              "space-x-2 backdrop-blur-sm md:rounded-2xl p-4 py-6 md:px-7 bg-slate-100/70 dark:bg-slate-950/80 duration-500"}>
                        <span className={logoHover ? "pt-3 pb-1 rounded-xl bg-amber-400" : "pt-3 pb-1 rounded-xl bg-white/40"}>Next Sakurairo</span>
                        <span className={""}>の</span>
                        <span>Site</span>
                    </Link>

                    <div className={headerHover || isScrolled ?
                        "flex items-center duration-500" :
                        "flex items-center backdrop-blur-sm md:rounded-2xl md:px-6 md:py-1 bg-slate-100/70 dark:bg-slate-950/80 duration-500"}>
                        {headerItems.map((item) => (
                            <div key={item.name}
                                 className={"px-2 font-semibold"}>
                                {item.name}
                            </div>
                        ))}
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex md:hidden w-full items-center justify-between">
                    <Link href={"/"}
                          onMouseEnter={() => setLogoHover(true)}
                          onMouseLeave={() => setLogoHover(false)}
                          className={"space-x-2"}>
                        <span className={logoHover ? "pt-3 pb-1 rounded-xl bg-amber-400" : "pt-3 pb-1 rounded-xl bg-white/40"}>Next Sakurairo</span>
                        <span className={""}>の</span>
                        <span>Site</span>
                    </Link>
                    <div>
                        <button
                            type="button"
                            className="bg-slate-200 dark:bg-slate-800 m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className={"w-6 h-6"} aria-hidden={"true"}></Bars3Icon>
                        </button>
                    </div>

                </div>
                <Transition show={mobileMenuOpen}
                            as={Fragment}>
                    <Dialog
                            as="div"
                            open={mobileMenuOpen}
                            onClose={() => setMobileMenuOpen(false)}
                            className={"md:hidden z-50"}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="translate-x-full"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-x-0 inset-y-16 h-full bg-black/70 dark:bg-white/10" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 translate-x-full"
                        >
                            <Dialog.Panel className={"fixed border-t inset-y-16 right-0 z-50 h-full bg-slate-100 " +
                                "dark:bg-slate-900 px-6 py-6 w-3/4"}>
                                <div className="flex flex-col items-center justify-between">
                                    <a href="#" className="m-1.5 p-1.5">
                                        <span className="">Next Sakurairo</span>
                                    </a>
                                    {headerItems.map((item) => (
                                        <div key={item.name}
                                             className={"px-2 font-semibold"}>
                                            {item.name}
                                        </div>
                                    ))}
                                    <ThemeToggle />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>

            </div>
        </header>
    )
}