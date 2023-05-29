import Link from "next/link";

export default function Header() {
    return (
        <header className={"fixed flex w-full z-50"}>
            <div className={"flex w-full min-h-14 md:h-16 backdrop-blur-sm items-center md:rounded-2xl md:mt-5 md:mx-10 px-4 md:px-6 bg-white/60"}>
                <div className="flex md:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Placeholder</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div>
                    Item
                </div>
                <div>
                    Item
                </div>
                <div>
                    Item
                </div>
            </div>
        </header>
    )
}