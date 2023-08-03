"use client";

import { cn } from "@/lib/utils";
import useSWR from "swr";
import {useState} from "react";

type LinkCardProps = {
    link: string;
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function LinkCard({ link }: LinkCardProps) {
    const [hover, setHover] = useState(false);
    const { data, error, isLoading } = useSWR(
        "/api/content-components/link-card/link-card?url=" + encodeURIComponent(link),
        fetcher)

    if (isLoading) return (
        <div className={"animate-pulse"}>
            <div className={cn(
                "flex p-2 mx-auto rounded-xl not-prose",
                "md:w-7/12 h-full",
                "backdrop-blur-2xl overflow-hidden bg-slate-50/50 dark:bg-gray-800/70"
            )}>
                <div className={"h-32 w-32 flex items-center"}>
                    <div className={"rounded-xl h-full w-full bg-slate-300 dark:bg-slate-500"}></div>
                </div>
                <div className={"h-32 pl-4 flex-1 flex flex-col space-y-2"}>
                    <div className={"flex flex-col space-y-1"}>
                        <div className={"h-4 bg-slate-400 dark:bg-slate-500 rounded"}></div>
                        <div className={"h-4 bg-slate-400 dark:bg-slate-500 rounded"}></div>
                    </div>
                    <div className={"flex flex-col space-y-1"}>
                        <div className={"h-3 bg-slate-400 dark:bg-slate-500 rounded"}></div>
                        <div className={"h-3 bg-slate-400 dark:bg-slate-500 rounded"}></div>
                        <div className={"h-3 bg-slate-400 dark:bg-slate-500 rounded"}></div>
                    </div>
                </div>
            </div>
        </div>
    )

    if (error || data.error) return <p>Error: {error}</p>

    if (data) return (
        <div onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={() => window.location.href = link}
             style={hover ? {cursor: 'pointer'} : {}}
             className={cn(
                 "flex p-2 mx-auto rounded-xl not-prose",
                 "md:w-7/12 h-full duration-500",
                 "backdrop-blur-2xl overflow-hidden bg-slate-50/50 dark:bg-gray-800/70",
                 {"shadow-lg shadow-primary_color/50 dark:shadow-primary_color-dark/30": hover}
             )}>
            <div className={"h-32 w-32 flex items-center"}>
                {data.ogImage && data.ogImage[0]?.url ? (
                    <img className={"h-max w-max mx-auto rounded-lg"}
                         alt={data.ogTitle}
                         src={data.ogImage[0].url}/>
                ) : (
                    <img className={"h-max w-max mx-auto rounded-lg"}
                         alt={data.ogTitle}
                         src={"image-not-found.png"}/>
                )}
            </div>
            <div className={"h-32 pl-4 flex-1 flex flex-col space-y-2"}>
                <div className={"line-clamp-2 font-bold text-base"}>
                    {data.ogTitle}
                </div>
                <p className={"line-clamp-3 font-light text-sm"}>
                    {data.ogDescription}
                </p>
            </div>
        </div>
    )
}