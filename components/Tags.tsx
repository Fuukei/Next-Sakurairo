"use client";

import { cn } from "@/lib/utils";
import { parseISO, differenceInDays, format } from 'date-fns';
import * as Tooltip from "@radix-ui/react-tooltip";
import { HiOutlineHashtag } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

type DateTagProps = {
    date: string;
    lastEdited: string;
}

export function DateTag({ date, lastEdited }: DateTagProps) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const parsedDate = parseISO(date);
    const parsedLastEdited = parseISO(lastEdited);
    const daysDifference = differenceInDays(parsedLastEdited, parsedDate);

    if (daysDifference > 1) {
        return (
            <Tooltip.Provider>
                <Tooltip.Root delayDuration={200}
                              onOpenChange={(open) => setTooltipOpen(open)}>
                    <Tooltip.Trigger asChild>
                        <div className={cn(
                            "rounded-md whitespace-nowrap",
                            "bg-rotate_color-180/70 dark:bg-rotate_color-180-dark/70 backdrop-blur-md"
                        )}>
                            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                                Posted on {format(parsedDate, 'LLLL d, yyyy')} (edited)
                            </div>
                        </div>
                    </Tooltip.Trigger>
                    <AnimatePresence>
                        {tooltipOpen && (
                            <Tooltip.Portal forceMount>
                                <Tooltip.Content
                                    sideOffset={5}
                                    side={"right"}
                                >
                                    <m.div
                                        initial={{ opacity: 0, x: -10 }}  // Modify the x-axis for side tooltip
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ ease: "easeOut", duration: 0.3 }}
                                        className={"bg-rotate_color-180/70 dark:bg-rotate_color-180-dark/70 rounded-md backdrop-blur-md"}
                                    >
                                        <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                                            Last edited on {format(parsedLastEdited, 'LLLL d, yyyy')}
                                        </div>
                                        <Tooltip.Arrow className={"fill-rotate_color-180/70 dark:fill-rotate_color-180-dark/70 backdrop-blur-md"}/>
                                    </m.div>
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        )}
                    </AnimatePresence>
                </Tooltip.Root>
            </Tooltip.Provider>
        )
    }

    return (
        <div className={cn(
            "rounded-md whitespace-nowrap",
            "bg-rotate_color-180/70 dark:bg-rotate_color-180-dark/70 backdrop-blur-md"
        )}>
            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                Posted on {format(parsedDate, 'LLLL d, yyyy')}
            </div>
        </div>
    );
}

export function NoTag() {
    return (
        <div className={cn(
            "inline-flex text-xs rounded-md mr-2 items-center whitespace-nowrap",
            "bg-rotate_color-90/30 dark:bg-rotate_color-90-dark/30 backdrop-blur-md"
        )}>
            <div className={"text-xs py-1 px-1 opacity-70"}>No tags</div>
        </div>
    )
}

type TagProps = {
    tag: string;
};

export function Tag({ tag }: TagProps) {
    return (
        <Link href={`/tags/${tag}`}>
            <div className={cn(
                "inline-flex text-xs rounded-md mr-2 items-center whitespace-nowrap",
                "bg-rotate_color-90/70 dark:bg-rotate_color-90-dark/70 backdrop-blur-md",
                "hover:scale-125 duration-500"
            )}>
                <HiOutlineHashtag className={"w-3 h-3 ml-1"}/>
                <div className={"text-xs py-1 px-1"}>{tag}</div>
            </div>
        </Link>
    );
}