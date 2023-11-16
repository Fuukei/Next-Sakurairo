import { cn } from "@/lib/utils";

export default function Loading() {
    return (
        <div className="min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-slate-900/70">
            <div className="animate-pulse flex flex-col justify-end items-center min-h-[150px] md:min-h-[200px] overflow-hidden pb-4">
                <div className="h-6 md:h-10 w-3/4 bg-slate-400 dark:bg-slate-500 rounded mb-2"></div>
                <div className="h-0.5 w-2/5 md:w-1/4 bg-slate-400 dark:bg-slate-500 rounded"></div>
            </div>
            <div className="py-8 mx-4 md:mx-auto lg:px-4 md:max-w-3xl lg:max-w-4xl">
                <div className="animate-pulse space-y-4">
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/5"></div>
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/4"></div>
                    <div className="h-5 bg-slate-400 dark:bg-slate-500 rounded w-1/3"></div>
                </div>
            </div>
        </div>
    )
}
