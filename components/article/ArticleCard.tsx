"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "contentlayer/generated";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DateTag, NoTag, Tag } from "@/components/Tags";

type ArticleCardProps = {
    article: Article;
    idx: number;
}

export default function ArticleCard({ article, idx }: ArticleCardProps) {
    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             className={cn({
                     "md:flex-row-reverse": idx % 2 !== 0,
                     "md:flex-row": idx % 2 === 0
                 },
                 {
                     "shadow-xl shadow-primary_color/50 dark:shadow-primary_color-dark/30": hover,
                 },
                 "bg-slate-50/60 dark:bg-gray-900/60 drop-shadow-md",
                 "mb-4 md:mb-6 md:h-72",
                 "flex w-full flex-col rounded-xl overflow-hidden duration-500"
             )}>
            <div className="w-full md:w-7/12 overflow-hidden">
                <Link href={article.url}>
                    <Image src={article.image}
                           alt={article.title}
                           className={cn({
                               "scale-110": hover
                           },
                               "w-full h-64 md:h-full object-cover duration-500",
                           )}
                           width={1920}
                           height={1080}/>
                </Link>
            </div>

            <div className="w-full md:w-5/12 p-4 lg:px-8">
                <div className={"flex mb-2"}>
                    <DateTag date={article.date}></DateTag>
                </div>
                <div className={"flex mb-3"}>
                    {(() => {
                        if (!article.tags || article.tags.length === 0) {
                            return (
                                <NoTag/>
                            )
                        } else {
                            return article.tags.map((tag) => (
                                <Tag key={tag} tag={tag}/>
                            ))
                        }
                    })()}
                </div>

                <div className={cn({
                        "lg:justify-items-end lg:text-end": idx % 2 === 0,
                        "lg:justify-items-start": idx % 2 !== 0
                    },
                    "lg:grid"
                )}>
                    <h2 className={cn({
                        "text-primary_color dark:text-primary_color-dark": hover
                    },
                        "font-bold text-lg mb-2 line-clamp-2 duration-200",
                    )}>
                        <Link href={article.url}>{article.title}</Link>
                    </h2>
                    <p className="text-sm font-light line-clamp-4">
                        {article.excerpt}
                    </p>
                </div>
            </div>
        </div>
    )
}