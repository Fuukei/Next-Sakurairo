"use client";

import { cn } from "@/lib/utils";
import { parseISO, differenceInDays, format } from 'date-fns';
import * as Tooltip from "@radix-ui/react-tooltip";
import { HiHashtag } from "react-icons/hi";
import Link from "next/link";

type DateTagProps = {
    date: string;
    lastEdited: string;
}

export function DateTag({ date, lastEdited }: DateTagProps) {
    const parsedDate = parseISO(date);
    const parsedLastEdited = parseISO(lastEdited);
    const daysDifference = differenceInDays(parsedLastEdited, parsedDate);

    if (daysDifference > 1) {
        return (
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <div className={"bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"}>
                            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                                Posted on {format(parsedDate, 'LLLL d, yyyy')} (Edited)
                            </div>
                        </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"
                            sideOffset={5}
                            suppressHydrationWarning={true}
                            side={"right"}
                        >
                            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                                Last edited on {format(parsedLastEdited, 'LLLL d, yyyy')}
                            </div>
                            <Tooltip.Arrow className="fill-accent_color/50 dark:fill-accent_color-dark/70" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        )
    }

    return (
        <div className={"bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"}>
            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                Posted on {format(parsedDate, 'LLLL d, yyyy')}
            </div>
        </div>
    );
}

export function NoTag() {
    return (
        <div className={cn(
            "inline-flex text-xs rounded-md mr-2 items-center",
            "bg-secondary_color/20 dark:bg-secondary_color-dark/20"
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
                "inline-flex text-xs rounded-md mr-2 items-center",
                "bg-secondary_color/50 dark:bg-secondary_color-dark/70",
                "hover:scale-125 duration-500"
            )}>
                <HiHashtag className={"w-3 h-3 ml-1"}/>
                <div className={"text-xs py-1 px-1"}>{tag}</div>
            </div>
        </Link>
    );
}