import { useTheme } from "next-themes";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={"bg-slate-50 dark:bg-slate-800 rounded-md relative inline-block text-left my-4"}
            >
                <DropdownMenu.Trigger>
                    <div className={"w-full h-full flex p-2.5"}>
                        <div className={"relative w-6 h-6 text-primary_color dark:text-primary_color-dark"}>
                            <motion.div
                                animate={{ x: isDark ? "-50%" : 0, opacity: isDark ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <SunIcon className="w-full h-full" />
                            </motion.div>
                            <motion.div
                                animate={{ x: isDark ? 0 : "50%", opacity: isDark ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <MoonIcon className="w-full h-full" />
                            </motion.div>
                        </div>

                    </div>
                </DropdownMenu.Trigger>
            </motion.div>
            <AnimatePresence>
                {open && (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content className={"z-40"} align={"center"}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'easeIn', duration: 0.1 }}
                                className={cn(
                                "my-2 p-2 rounded-md",
                                "bg-slate-50 dark:bg-slate-800 float-left text-primary_color dark:text-primary_color-dark"
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

