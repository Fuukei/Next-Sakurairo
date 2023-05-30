export default function Footer() {
    return (
        <footer className={"border-t flex bg-white/70 dark:bg-gray-900/80 backdrop-blur-md py-8"}>
            <div className={"mx-auto items-center justify-between px-8"}>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; cocdeshijie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}