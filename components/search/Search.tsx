"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useMemo } from "react";
import SearchInput from "@/components/search/SearchInput";
import { type Article } from 'contentlayer/generated';
import { useSearchStore } from '@/stores/search-store';
import { shallow } from "zustand/shallow";
import { searchArticles } from "@/lib/search";
import SearchResults from "@/components/search/SearchResults";

type SearchProps = {
    articles: Article[];
};

export default function Search({ articles }: SearchProps) {
    const { query, isSearching, toggleSearch } = useSearchStore(
        (state) => ({
            query: state.query,
            isSearching: state.isSearching,
            toggleSearch: state.toggleSearch,
        }),
        shallow,
    );

    const results = useMemo(() => searchArticles(query, articles), [query, articles]);

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
    }, [toggleSearch]);  // Run the effect only on component mount and unmount

    return (
        <Dialog.Root open={isSearching}>
            <Dialog.Trigger>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => toggleSearch()}
                    className={cn(
                        "m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
                        "bg-slate-50 dark:bg-slate-800 text-primary_color dark:text-primary_color-dark"
                    )}
                >
                    <span className="sr-only">Open menu</span>
                    <MagnifyingGlassIcon className={"w-6 h-6"} aria-hidden={"true"}/>
                </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
                {isSearching ? (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                onClick={() => toggleSearch()}
                                className={cn(
                                    "fixed z-50 inset-x-0 inset-y-0 h-screen",
                                    "bg-slate-900 dark:bg-slate-500"
                                )}
                            >
                            </motion.div>
                        </Dialog.Overlay>
                        <Dialog.Content>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'linear', duration: 0.15 }}
                                className={cn(
                                    "fixed flex flex-col z-50 px-6 py-6 rounded-xl",
                                    "md:inset-1/4 md:w-1/2 h-fit md:min-h-1/3 md:max-h-[66%]",
                                    "inset-[5%] inset-y-[10%] w-[90%] h-fit min-h-[40%] max-h-[85%]",
                                    "bg-slate-100/80 dark:bg-slate-900/80"
                                )}
                            >
                                <SearchInput />
                                <SearchResults query={query} results={results}/>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                ) : null}
            </AnimatePresence>
        </Dialog.Root>
    )
}