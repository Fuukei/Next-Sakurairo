import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";

export default function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <Menu as={"div"} className={"bg-blue-500 rounded-md"}>
            <Menu.Button className={"w-full h-full flex"}>
                <SunIcon className={"w-6 h-6 m-1 dark:hidden"}></SunIcon>
                <MoonIcon className={"w-6 h-6 m-1 hidden dark:block"}></MoonIcon>
            </Menu.Button>
            <Menu.Items className={"bg-white absolute"}>
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => setTheme("light")}>
                            Light
                        </button>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => setTheme("dark")}>
                            Dark
                        </button>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <button onClick={() => setTheme("system")}>
                            System
                        </button>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

