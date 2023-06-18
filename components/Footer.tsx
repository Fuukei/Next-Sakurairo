import { cn } from "@/lib/utils";

export default function Footer() {
    return (
        <footer className={cn(
            "border-t border-accent_color/50 dark:border-accent_color-dark/25",
            "flex backdrop-blur-md py-8",
            "bg-slate-200/70 dark:bg-gray-900/80"
        )}>
            <div className={"mx-auto items-center justify-between px-8"}>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; cocdeshijie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}