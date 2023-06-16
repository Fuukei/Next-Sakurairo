import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typing } from "@/app/Typing";
import Link from "next/link";
import { blogConfig } from "@/config";

export default function HeroSection() {
    return (
        <div className={"grid content-center justify-items-center min-h-screen"}>
            <div className="w-36 h-36 mx-auto mb-3">
                <Image
                    src="https://qwq.xyz/wp-content/uploads/2022/03/cocdeshijie.gif"
                    alt="Profile Image"
                    width={0}
                    height={0}
                    style={{ width: 'auto', height: '100%' }}
                    className="object-cover hover:rotate-[360deg] duration-500"/>
            </div>
            <div className={"w-10/12 max-w-xl"}>
                <div className={cn(
                    "backdrop-blur-sm drop-shadow-md w-full rounded-2xl text-center py-5",
                    "bg-secondary_color/50 dark:bg-secondary_color-dark/50"
                )}>
                    <Typing />
                </div>
            </div>
            <div className="flex mt-5 space-x-3">
                {blogConfig.social.map((social) => {
                    return (
                        <Link href={social.href}
                              key={social.title}
                              className={cn(
                                  "backdrop-blur-sm drop-shadow rounded-xl w-8 h-8",
                                  "bg-secondary_color/70 dark:bg-secondary_color-dark/70"
                              )}>
                            <div className={"m-1"}>
                                {social.icon}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}