import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";

export default function ThemeToggle() {
    const { setTheme } = useTheme()

    return (
        <Menu as={"div"} className={"bg-blue-500 rounded-md relative inline-block text-left"}>
            <Menu.Button className={"w-full h-full flex p-2.5"}>
                <SunIcon className={"w-6 h-6 dark:hidden"}></SunIcon>
                <MoonIcon className={"w-6 h-6 hidden dark:block"}></MoonIcon>
            </Menu.Button>
            <Menu.Items className={"bg-amber-500 absolute right-0 mt-2 origin-top-right divide-y rounded-md"}>
                <div className={"p-1"}>
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
                </div>

            </Menu.Items>
        </Menu>
    )
}

