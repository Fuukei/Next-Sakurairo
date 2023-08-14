"use client";

import { cn } from "@/lib/utils";
import { RiExternalLinkLine } from "react-icons/ri";
import React, { ReactNode, Children, useState, useEffect } from 'react';

type LinkCardProps = {
    link: string;
    profile: string;
    title: string;
    description: string;
    author: string;
}

export function FriendLinkCard({ link, profile, title, description, author }: LinkCardProps) {
    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={() => window.open(link, '_blank')}
             style={hover ? {cursor: 'pointer'} : {}}
             className={cn(
                 "flex p-2 mx-auto rounded-xl not-prose",
                 "w-full h-full duration-500",
                 "backdrop-blur-2xl overflow-hidden bg-slate-50/50 dark:bg-gray-800/70",
                 {"shadow-lg shadow-theme_color/50 dark:shadow-theme_color-dark/30": hover}
             )}>
            <div className={"h-32 pr-4 flex-1 flex flex-col space-y-2"}>
                <div className={"line-clamp-2 font-bold text-base"}>
                    {title}
                </div>
                <p className={"line-clamp-2 md:line-clamp-3 font-light text-sm"}>
                    {description}
                </p>
                <p className={"line-clamp-1 font-thin text-xs"}>
                    {link}
                </p>
            </div>
            <div className={"h-32 w-32 flex items-center"}>
                <img className={"h-max w-max mx-auto rounded-lg"}
                     alt={"Profile image"}
                     src={profile}/>
            </div>
            <div className={"absolute top-2 right-2"}>
                <RiExternalLinkLine className={cn(
                    hover ? "text-text_color dark:text-text_color-dark" : "",
                    "duration-500"
                )}/>
            </div>
        </div>
    )
}

type RandomFriendLinkCardsProps = {
    children: ReactNode[];
};

export function RandomFriendLinkCards({ children }: RandomFriendLinkCardsProps) {
    const [randomizedChildren, setRandomizedChildren] = useState<ReactNode[]>([]);

    useEffect(() => {
        const shuffled = Children.toArray(children).sort(() => 0.5 - Math.random());
        setRandomizedChildren(shuffled);
    }, [children]);

    return (
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4">
            {randomizedChildren}
        </div>
    );
}
