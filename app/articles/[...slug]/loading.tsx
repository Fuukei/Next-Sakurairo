import { cn } from "@/lib/utils";

export default function Loading() {
    return (
        <div className="min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-slate-900/70">
            <div className="animate-pulse flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden bg-slate-300 dark:bg-slate-600">
                <div className={"flex w-full backdrop-blur-sm"}>
                    <div className={"self-end w-full pb-2 md:pb-4 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                        <div className={"h-8 bg-slate-400 dark:bg-slate-500 rounded pt-20"}/>
                    </div>
                </div>
            </div>
            <div className={cn(
                "pb-8 mx-4 md:mx-auto lg:px-4",
                "md:max-w-3xl lg:max-w-4xl pt-20"
            )}>
                <div className="animate-pulse space-y-4">
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/5"/>
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/4"/>
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/3"/>
                </div>
            </div>
        </div>
    )
}
