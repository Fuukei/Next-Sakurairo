import { useTheme } from "next-themes";
import {Menu, Transition} from "@headlessui/react";
import {ComputerDesktopIcon, MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {Fragment} from "react";

interface MenuItemProps {
    onClick?: () => void,
    children: React.ReactNode
}

function MenuItem ({ onClick, children }: MenuItemProps) {
    return (
        <Menu.Item>
            {({ active }) => (
                <div onClick={onClick}
                     className={"flex px-2 py-1 items-center rounded-sm"}>
                    {children}
                </div>
            )}
        </Menu.Item>
    )
}

export default function ThemeToggle() {
    const { setTheme } = useTheme()

    return (
        <Menu as={"div"} className={"bg-white dark:bg-slate-900/80 rounded-md relative inline-block text-left my-4"}>
            <Menu.Button className={"w-full h-full flex p-2.5"}>
                <SunIcon className={"w-6 h-6 dark:hidden"}></SunIcon>
                <MoonIcon className={"w-6 h-6 hidden dark:block"}></MoonIcon>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={"bg-white dark:bg-slate-900/80 absolute md:right-0 mt-2 rounded-md"}>
                    <div className={"p-2"}>
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
                    </div>
                </Menu.Items>
            </Transition>

        </Menu>
    )
}

