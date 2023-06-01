import { useTheme } from "next-themes";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu  from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MenuItemProps {
    onClick?: () => void,
    children: React.ReactNode
}

function MenuItem ({ onClick, children }: MenuItemProps) {
    return (
        <DropdownMenu.Item>
            <div onClick={onClick}
                 className={cn(
                     "flex px-2 py-1 items-center rounded-md border-transparent border-2",
                     "hover:border-slate-300 hover:dark:border-slate-600"
                 )}>
                {children}
            </div>
        </DropdownMenu.Item>
    )
}

export default function ThemeToggle() {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme()

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenu.Trigger className={"bg-slate-50 dark:bg-slate-800 rounded-md relative inline-block text-left my-4"}>
                <div
                    className={"w-full h-full flex p-2.5"}>
                    <SunIcon className={"w-6 h-6 dark:hidden"}></SunIcon>
                    <MoonIcon className={"w-6 h-6 hidden dark:block"}></MoonIcon>
                </div>
            </DropdownMenu.Trigger>
            <AnimatePresence>
                {open && (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content className={"z-50"} align={"center"}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'easeIn', duration: 0.1 }}
                                className={cn(
                                "my-2 p-2 rounded-md",
                                "bg-slate-50 dark:bg-slate-800 float-left"
                            )}>
                                <MenuItem onClick={() => setTheme("light")}>
                                    <SunIcon className={"w-4 h-4 mr-2"}/>
                                    <span>Light</span>
                                </MenuItem>
                                <MenuItem onClick={() => setTheme("dark")}>
                                    <MoonIcon className={"w-4 h-4 mr-2"}/>
                                    <span>Dark</span>
                                </MenuItem>
                                <MenuItem onClick={() => setTheme("system")}>
                                    <ComputerDesktopIcon className={"w-4 h-4 mr-2"}/>
                                    <span>System</span>
                                </MenuItem>
                            </motion.div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                )}
            </AnimatePresence>
        </DropdownMenu.Root>

    )
}

