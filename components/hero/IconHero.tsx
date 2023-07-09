import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typing } from "@/components/hero/typist/Typing";
import { blogConfig } from "@/config";
import Link from "next/link";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const heroSetting = require("@/config").blogConfig.hero.settings

export default function IconHero() {

    return (
        <div className={"grid content-center justify-items-center min-h-screen"}>
            <div className="w-36 h-36 mx-auto mb-3">
                <Image
                    src={heroSetting.icon_path}
                    alt="Icon Image"
                    width={256}
                    height={256}
                    style={{ width: 'auto', height: '100%' }}
                    className="object-cover hover:rotate-[360deg] duration-500"/>
            </div>
            <div className={"w-10/12 max-w-xl"}>
                <div className={cn(
                    "backdrop-blur-sm drop-shadow-md w-full rounded-2xl text-center py-5",
                    "bg-secondary_color/50 dark:bg-secondary_color-dark/50"
                )}>
                    <div className="flex justify-center items-center space-x-1 font-semibold">
                        <ImQuotesLeft className={"w-4 h-4 mb-2"} />
                        <Typing />
                        <ImQuotesRight className={"w-4 h-4 mb-2"} />
                    </div>
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
