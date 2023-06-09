import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useSearchStore } from "@/stores/search-store";


export default function SearchTrigger() {
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

    return (
        <motion.button
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
        </motion.button>
    )
}