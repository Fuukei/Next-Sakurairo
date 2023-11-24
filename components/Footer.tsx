import { cn } from "@/lib/utils";
import { blogConfig } from "@/config";

export default function Footer() {
    return (
        <footer className={cn(
            "flex py-8",
            "backdrop-blur-3xl bg-zinc-50/50 dark:bg-zinc-800/70"
        )}>
            <div className={"mx-auto items-center justify-between px-8"}>
                <div className={"mt-8 md:order-1 md:mt-0"}>
                    <p className={"text-center text-xs leading-5 text-zinc-500"}>
                        {blogConfig.footer}
                    </p>
                </div>
            </div>
        </footer>
    )
}