"use client";

import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useMemo } from "react";
import SearchInput from "@/components/search/SearchInput";
import { allArticles } from 'contentlayer/generated';
import { useSearchStore } from '@/stores/search-store';
import { shallow } from "zustand/shallow";
import { searchArticles } from "@/lib/search";
import SearchResults from "@/components/search/SearchResults";

export default function Search() {
    const { query, isSearching, toggleSearch } = useSearchStore(
        (state) => ({
            query: state.query,
            isSearching: state.isSearching,
            toggleSearch: state.toggleSearch,
        }),
        shallow,
    );

    const results = useMemo(() => searchArticles(query, allArticles), [query]);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                toggleSearch()
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [toggleSearch]);

    return (
        <Dialog.Root open={isSearching}>
            <AnimatePresence>
                {isSearching ? (
                    <Dialog.Portal forceMount>
                        <m.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                            className={cn(
                                "fixed z-50 inset-0 flex items-center justify-center",
                                "bg-zinc-800/50 backdrop-blur-lg"
                            )}
                        >
                            <Dialog.Content onEscapeKeyDown={toggleSearch}
                                            onInteractOutside={toggleSearch}
                                            className={cn(
                                                "bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-lg drop-shadow-lg",
                                                "w-11/12 md:w-1/2 h-3/5",
                                                "p-2 md:p-6 rounded-xl"
                                            )}
                            >
                                <SearchInput />
                                <SearchResults query={query} results={results}/>
                            </Dialog.Content>
                        </m.div>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    )
}