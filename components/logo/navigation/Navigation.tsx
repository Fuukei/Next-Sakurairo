"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavigationItemProps = {
    item: {
        title: string;
        href: string;
    };
}

function NavigationItem({ item }: NavigationItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={item.href}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
        >
            <div className="px-2 font-semibold">
                {item.title}
                <m.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        display: 'block',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transformOrigin: 'left',
                    }}
                />
            </div>
        </Link>
    )
}

type NavigationItemSProps = {
    item: {
        title: string;
        child: {
            title: string;
            href: string;
        }[];
    };
}

function NavigationItems({ item }: NavigationItemSProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
            >
                <div className="px-2 font-semibold">
                    {item.title}
                    <m.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: 'block',
                            height: '2px',
                            backgroundColor: 'currentColor',
                            transformOrigin: 'left',
                        }}
                    />
                </div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={"absolute w-max"}>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: 'easeIn', duration: 0.1 }}
                    className={cn(
                        "mt-4 px-3 py-2 space-y-2 rounded-md",
                        "bg-zinc-100/80 dark:bg-zinc-800/80"
                    )}>
                    {item.child.map((child, idx) => {
                        return (
                            <NavigationMenu.Item key={idx}>
                                <NavigationItem item={child} />
                            </NavigationMenu.Item>
                        )
                    })}
                </m.div>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    )
}

type NavigationProps = {
    navigation: ({
        title: string;
        href: string;
    } | {
        title: string;
        child: {
            title: string;
            href: string;
        }[];
    })[];
}

export function Navigation({ navigation }: NavigationProps) {
    return (
        <NavigationMenu.Root className={"relative flex justify-center"}>
            <NavigationMenu.List className={"flex list-none space-x-2 text-text_color dark:text-text_color-dark"}>
                {navigation.map((item, idx) => {
                    if ("child" in item) return (
                        <NavigationItems item={item} key={idx}/>
                    )
                    return (
                        <NavigationMenu.Item key={idx}>
                            <NavigationItem item={item} />
                        </NavigationMenu.Item>
                    )
                })}
            </NavigationMenu.List>
            <NavigationMenu.Indicator className={cn("flex h-[10px] items-end justify-center overflow-hidden")}>
                <div className={cn(
                    "relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]",
                    "bg-theme_color/80 dark:bg-theme_color-dark/80"
                )}/>
            </NavigationMenu.Indicator>
        </NavigationMenu.Root>
    )
}

export function NavigationMobile({ navigation }: NavigationProps) {
    return (
        <div className={"flex flex-col items-center space-y-4 text-xl text-text_color dark:text-text_color-dark"}>
            {navigation.map((item, idx) => {
                if ("child" in item) return (
                    <div className={"flex flex-col items-center"} key={idx}>
                        <NavigationItem item={{title: item.title, href: "javascript:void(0)"}}/>
                        <div className={cn(
                            "flex flex-col items-center text-base",
                            "text-text_color/80 dark:text-text_color-dark/80"
                        )}>
                            {item.child.map((child, idx) => {
                                return (
                                    <NavigationItem item={child} key={idx}/>
                                )
                            })}
                        </div>
                    </div>

                )
                return (
                    <NavigationItem item={item} key={idx}/>
                )
            })}
        </div>
    )
}