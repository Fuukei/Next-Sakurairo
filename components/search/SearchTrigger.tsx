import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchStore } from "@/stores/search-store";
import IconButton from "@/components/IconButton";


export default function SearchTrigger() {
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

    return (
        <IconButton onClick={() => toggleSearch()}>
            <MagnifyingGlassIcon className={"w-6 h-6"} aria-hidden={"true"}/>
        </IconButton>
    )
}