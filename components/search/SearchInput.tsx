"use client";

import { useSearchStore } from '@/stores/search-store';
import { HiOutlineX } from 'react-icons/hi';
import { cn } from "@/lib/utils";

export default function SearchInput() {
    const query = useSearchStore((state) => state.query);
    const setQuery = useSearchStore((state) => state.setQuery);

    const clearQuery = () => {
        setQuery('');
    }

    return (
        <div className={"flex w-full mb-2 relative"}>
            <input
                type={"text"}
                aria-label={"Search articles"}
                autoFocus
                autoComplete={"off"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={cn(
                    "rounded-md px-3 py-1.5 w-full bg-transparent backdrop-blur-lg",
                    "outline-none focus:ring ring-theme_color dark:ring-theme_color-dark duration-300",
                    "placeholder:text-zinc-600 dark:placeholder:text-zinc-400"
                )}
                placeholder={"Search for articles..."}
            />
            {query && (
                <button type="button"
                        onClick={clearQuery}
                        className={cn(
                            "absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-6 w-6 rounded-full"
                        )}
                >
                    <HiOutlineX/>
                </button>
            )}
        </div>
    )
}