"use client"

import useSWR from 'swr';
import { cn } from "@/lib/utils";
import { BsFillCheckCircleFill, BsFillXCircleFill, BsFillPauseFill, BsFillPlayFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

type AnimeStatus = 1 | 2 | 3 | 4 | 6;

const statusColors: Record<AnimeStatus, string> = {
    1: "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400",  // Watching
    2: "border-green-600 dark:border-green-400 text-green-600 dark:text-green-400",  // Completed
    3: "border-yellow-600 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400",  // On Hold
    4: "border-red-600 dark:border-red-400 text-red-600 dark:text-red-400",  // Dropped
    6: "border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400",  // Plan to watch
};

const statusIcons: Record<AnimeStatus, JSX.Element> = {
    1: <BsFillPlayFill />, // Watching
    2: <BsFillCheckCircleFill />, // Completed
    3: <BsFillPauseFill />, // On Hold
    4: <BsFillXCircleFill />, // Dropped
    6: <BsFillQuestionCircleFill />, // Plan to watch
};

const statusMap: Record<AnimeStatus, string> = {
    1: 'Watching',
    2: 'Completed',
    3: 'On Hold',
    4: 'Dropped',
    6: 'Plan to watch'
};

function AnimeCard({ anime }: any) {
    const [hover, setHover] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        const titleElement = titleRef.current;
        const containerElement = containerRef.current;

        if (titleElement && containerElement) {
            const shouldScroll = titleElement.offsetWidth < titleElement.scrollWidth;
            setShouldScroll(shouldScroll);

            // If the text should not scroll, center the text
            if (!shouldScroll) {
                titleElement.style.textOverflow = 'clip';
                containerElement.style.justifyContent = 'center';
            }
        }
    }, [anime.anime_title]);

    const scrollSpeed = 50;
    const scrollDistance = -(titleRef.current?.scrollWidth ?? 0) + (containerRef.current?.offsetWidth ?? 0) - 10;
    const duration = Math.abs(scrollDistance) / scrollSpeed;

    const animeStatus: AnimeStatus = anime.status;

    return (
        <div ref={containerRef}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             className={cn(
                 "bg-slate-50/50 dark:bg-gray-800/70 drop-shadow-md",
                 "mb-4 md:mb-6",
                 "hover:scale-110 duration-500",
                 "rounded-lg overflow-hidden border-2",
                 statusColors[animeStatus] || 'border-gray-500',
                 )}>
            <div className={"absolute top-0 right-0 m-2"}>
                {statusIcons[animeStatus]}
            </div>
            <div className={"w-full overflow-hidden"}>
                <a href={`https://myanimelist.net${anime.anime_url}`} target="_blank" rel="noopener noreferrer">
                    <img src={anime.anime_image_path}
                         alt={anime.anime_title_eng}
                         className={cn(
                             "w-full h-full object-cover m-0",
                             )}
                         height={1920}
                         width={1080}/>
                </a>
            </div>
            <motion.div
                ref={titleRef}
                className="block whitespace-nowrap text-center"
                initial={{ x: 0 }}
                animate={hover && shouldScroll ? { x: scrollDistance } : { x: 0 }}
                transition={{
                    duration: hover ? duration : 0,
                    repeat: hover ? Infinity : 0,
                    repeatType: 'loop',
                    repeatDelay: 1
                }}
            >
                {anime.anime_title}
            </motion.div>
        </div>
    )
}

const sortOptionMap = {
    "Status and Last Updated": "order=16$order2=5$status=7",
    "Last Updated": "order=5$status=7",
    "Status": "order=16$status=7",
} as const;

type SortOptions = keyof typeof sortOptionMap;

type MyAnimeListProps = {
    username: string;
    sort: SortOptions;
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function MyAnimeList( { username, sort }: MyAnimeListProps) {
    const { data, error, isLoading } = useSWR(
        `/api/content-components/anime-list/my-anime-list?username=${username}&sort=${sortOptionMap[sort]}`,
        fetcher)

    if (isLoading) return (
        <>
            <div className={"mb-8"}>
                {Object.entries(statusMap).map(([status, statusText]) => (
                    <div key={status} className={"flex items-center justify-center"}>
                        <div className={statusColors[Number(status) as AnimeStatus]}>
                            {statusIcons[Number(status) as AnimeStatus]}
                        </div>
                        <span className={"ml-2"}>{statusText}:
                            <span className={cn(
                                "bg-slate-400 dark:bg-slate-500",
                                "rounded w-5 h-4 animate-pulse inline-block"
                            )}></span>
                            anime
                        </span>
                    </div>
                ))}
            </div>
            <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 not-prose"}>
                {Array(8).fill(0).map((_, idx) => (
                    <div key={idx} className={"bg-slate-50/50 dark:bg-gray-800/70 rounded-lg h-80 animate-pulse"}></div>
                ))}
            </div>
        </>
    )

    if (error) return <p>Error: {error}</p>

    const statusSummary = data.reduce((summary: { [key in AnimeStatus]: number }, anime: any) => {
        const status: AnimeStatus = anime.status;
        summary[status] = (summary[status] || 0) + 1;
        return summary;
    }, {1: 0, 2: 0, 3: 0, 4: 0, 6: 0});

    if (data) return (
        <>
            <div className={"mb-8"}>
                {Object.entries(statusSummary)
                    .filter(([status]) => status in statusIcons && status in statusMap)
                    .map(([status, count]) => (
                        <div key={status} className="flex items-center justify-center">
                            <div className={statusColors[Number(status) as AnimeStatus]}>
                                {statusIcons[Number(status) as AnimeStatus]}
                            </div>
                            <span className="ml-2">{statusMap[Number(status) as AnimeStatus]}: {(count as number)} anime</span>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
                {data.map((anime: any, idx: number) => {
                    return (
                        <AnimeCard anime={anime} key={idx} />
                    );
                })}
            </div>
        </>
    );
}