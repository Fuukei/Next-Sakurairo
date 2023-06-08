"use client";

import { useSearchStore } from '@/stores/search-store';

type SearchInputProps = {
    hasResults: boolean;
};

export default function SearchInput({ hasResults }: SearchInputProps) {
    const query = useSearchStore((state) => state.query);
    const setQuery = useSearchStore((state) => state.setQuery);

    return (
        <form className="flex w-full">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                type="text"
                name="search"
                id="search"
                autoComplete={"off"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="grow rounded-md border-0 px-3 py-1.5"
                placeholder="Search articles..."
            />
        </form>
    )
}