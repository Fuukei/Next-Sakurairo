"use client";

import { useSearchStore } from '@/stores/search-store';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export default function SearchInput() {
    const query = useSearchStore((state) => state.query);
    const setQuery = useSearchStore((state) => state.setQuery);

    // This function will be called when the X button is clicked
    const clearQuery = () => {
        setQuery('');
    }

    return (
        <div className="flex w-full mb-2 relative">
            <input
                type="text"
                aria-label="Search articles"
                autoFocus
                autoComplete={"off"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="grow rounded-md border-0 px-3 py-1.5 w-full"
                placeholder="Search articles..."
            />
            {query && (
                <button type="button"
                        onClick={clearQuery}
                        className={cn(
                            "absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-6 w-6 rounded-full"
                        )}>
                    <XMarkIcon/>
                </button>
            )}
        </div>
    )
}