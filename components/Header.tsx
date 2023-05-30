"use client";

import Link from "next/link";
import { Dialog } from '@headlessui/react'
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ModeToggle from "@/components/ModeToggle";

const headerItems = [
    {name: "Item1"},
    {name: "Item2"},
    {name: "Item3"},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={"fixed flex w-full z-40"}>
            <div className={"flex w-full min-h-14 md:h-16 backdrop-blur-sm md:rounded-2xl md:mt-5 md:mx-10 px-4 md:px-6 bg-white/60"}>

                <div className="hidden md:flex w-full items-center justify-between">
                    <a href="#" className="m-1.5 p-1.5">
                        <span className="sr-only">Placeholder</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>

                    <div className={"flex items-center"}>
                        {headerItems.map((item) => (
                            <div key={item.name}
                                 className={"px-2 font-semibold"}>
                                {item.name}
                            </div>
                        ))}
                        <ModeToggle />
                    </div>
                </div>

                <div className="flex md:hidden w-full items-center justify-between">
                    <a href="#" className="m-1.5 p-1.5">
                        <span className="sr-only">Placeholder</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>

                    <button
                        type="button"
                        className="bg-white/60 m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className={"w-6 h-6"} aria-hidden={"true"}></Bars3Icon>
                    </button>
                </div>
                <Dialog as={"div"}
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                        className={"md:hidden"}>
                    <Dialog.Panel className={"fixed border-t inset-y-16 right-0 z-50 h-full bg-white/60 px-6 py-6 w-3/4"}>
                        <div className="flex flex-col items-center justify-between">
                            <a href="#" className="m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            {headerItems.map((item) => (
                                <div key={item.name}
                                     className={"px-2 font-semibold"}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </Dialog.Panel>
                </Dialog>

            </div>
        </header>
    )
}