import { GoSearch } from "react-icons/go";
import { useSearchStore } from "@/stores/search-store";
import IconButton from "@/components/IconButton";


export default function SearchTrigger() {
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

    return (
        <IconButton onClick={() => toggleSearch()}>
            <GoSearch className={"w-6 h-6"} aria-hidden={"true"}/>
        </IconButton>
    )
}