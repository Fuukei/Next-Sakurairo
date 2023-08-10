import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { format, parseISO } from "date-fns";

type DateTagProps = {
    date: string;
}

export function DateTag({ date }: DateTagProps) {
    return (
        <div className={"bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"}>
            <div className={"text-xs py-1 px-2"} suppressHydrationWarning={true}>
                Posted on {format(parseISO(date), 'LLLL d, yyyy')}
            </div>
        </div>
    )
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
    children: ReactNode;
};

export function Tag({ children }: TagProps) {
    return (
        <div className={cn(
                 "inline-flex text-xs rounded-md mr-2 items-center",
                 "bg-secondary_color/50 dark:bg-secondary_color-dark/70"
             )}>
            {children}
        </div>
    )
}