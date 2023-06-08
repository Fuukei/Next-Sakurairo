import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Article } from "contentlayer/generated";
import { cn } from "@/lib/utils";
import { HashtagIcon } from "@heroicons/react/24/solid";

type ArticleCardProps = {
    article: Article;
    idx: number;
}

export default function ArticleCard({ article, idx }: ArticleCardProps) {

    return (
        <div className={cn({
            "md:flex-row-reverse": idx % 2 !== 0,
            "md:flex-row": idx % 2 === 0
            },
            "bg-white dark:bg-gray-900/75 ",
            "mb-4 md:mb-6 md:h-72",
            "flex w-full flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-500"
        )}>
            <div className="w-full md:w-7/12 overflow-hidden">
                <Link href={article.url}>
                    <Image src={article.image}
                           alt={article.title}
                           className={"w-full h-64 md:h-full object-cover hover:scale-110 duration-500"}
                           width={1920}
                           height={1080}/>
                </Link>
            </div>

            <div className="w-full md:w-5/12 p-4 lg:px-8">
                <div className={"flex mb-2"}>
                    <div className={"bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"}>
                        <div className={"text-xs py-1 px-2"}>Posted on {format(parseISO(article.date), 'LLLL d, yyyy')}</div>
                    </div>
                </div>
                <div className={"flex mb-3"}>
                    {(() => {
                        if (!article.tags || article.tags.length === 0) {
                            return (
                                <div className={cn(
                                    "inline-flex text-xs rounded-md mr-2 items-center",
                                    "bg-secondary_color/50 dark:bg-secondary_color-dark/70"
                                )}>
                                    <HashtagIcon className={"w-3 h-3 ml-1"}/>
                                    <div className={"text-xs py-1 px-1"}>No tags</div>
                                </div>
                            )
                        } else {
                            return article.tags.map((tag) => (
                                <div key={tag}
                                     className={cn(
                                    "inline-flex text-xs rounded-md mr-2 items-center",
                                    "bg-secondary_color/50 dark:bg-secondary_color-dark/70"
                                )}>
                                    <HashtagIcon className={"w-3 h-3 ml-1"}/>
                                    <div className={"text-xs py-1 px-1"}>{tag}</div>
                                </div>
                            ))
                        }
                    })()}
                </div>

                <div className={cn({
                        "lg:justify-items-end text-end": idx % 2 === 0,
                        "lg:justify-items-start": idx % 2 !== 0
                    },
                    "lg:grid"
                )}>
                    <h2 className={cn(
                        "font-bold text-lg mb-2 line-clamp-2",
                        "hover:text-primary_color hover:dark:text-primary_color-dark duration-200"
                    )}>
                        <Link href={article.url}>{article.title}</Link>
                    </h2>
                    <p className="text-sm line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,
                        aliquet sit amet elementum eu, eget massa. Donec metus mauris,
                        aliquam id dolor id, blandit condimentum magna.
                    </p>
                </div>
            </div>
        </div>
    )
}