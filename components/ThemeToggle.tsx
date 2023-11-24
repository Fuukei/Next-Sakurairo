import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiComputerDesktop, HiDeviceTablet, HiDevicePhoneMobile } from "react-icons/hi2";
import { AnimatePresence, m } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import IconButton from "@/components/IconButton";

interface MenuItemProps {
    onClick?: () => void,
    children: React.ReactNode
}

function MenuItem ({ onClick, children }: MenuItemProps) {
    return (
        <DropdownMenu.Item
            onSelect={onClick}
            className={cn(
                "flex px-2 py-1 items-center rounded-md border-transparent border-2 outline-none",
                "data-[highlighted]:bg-theme_color/25 data-[highlighted]:dark:bg-theme_color-dark/25",
                "data-[highlighted]:text-zinc-800 data-[highlighted]:dark:text-zinc-100",
                )}>
            {children}
        </DropdownMenu.Item>
    )
}

interface ThemeToggleProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ThemeToggle({ open, setOpen }: ThemeToggleProps) {
    const { setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const contentVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenu.Trigger className={"outline-none"}>
                <IconButton aria-label="theme toggle">
                    <div className={"relative w-6 h-6 text-text_color dark:text-text_color-dark"}>
                        <m.div
                            animate={{ x: isDark ? "-50%" : 0, opacity: isDark ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <HiOutlineSun className="w-full h-full" />
                        </m.div>
                        <m.div
                            animate={{ x: isDark ? 0 : "50%", opacity: isDark ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <HiOutlineMoon className="w-full h-full" />
                        </m.div>
                    </div>
                </IconButton>
            </DropdownMenu.Trigger>
            <AnimatePresence>
                {open && (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content className={"z-40"} align={"center"} side={"top"}>
                            <m.div
                                initial="hidden"
                                animate={open ? "visible" : "hidden"}
                                exit="hidden"
                                variants={contentVariants}
                                className={cn(
                                    "mb-2 p-2 rounded-md",
                                    "backdrop-blur-lg drop-shadow-lg bg-zinc-100/40 dark:bg-zinc-900/40",
                                    "text-text_color dark:text-text_color-dark"
                                )}
                            >
                                <MenuItem onClick={() => setTheme("light")}>
                                    <HiOutlineSun className={"w-4 h-4 mr-2"} />
                                    <span>Light</span>
                                </MenuItem>
                                <MenuItem onClick={() => setTheme("dark")}>
                                    <HiOutlineMoon className={"w-4 h-4 mr-2"} />
                                    <span>Dark</span>
                                </MenuItem>
                                <MenuItem onClick={() => setTheme("system")}>
                                    <HiComputerDesktop className="hidden lg:block w-4 h-4 mr-2" />
                                    <HiDeviceTablet className="hidden md:block lg:hidden w-4 h-4 mr-2" />
                                    <HiDevicePhoneMobile className="block md:hidden w-4 h-4 mr-2" />
                                    <span>System</span>
                                </MenuItem>
                                <DropdownMenu.Arrow className={"fill-zinc-100/40 dark:fill-zinc-800/40"}/>
                            </m.div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                )}
            </AnimatePresence>
        </DropdownMenu.Root>
    )
}

