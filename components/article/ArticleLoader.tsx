"use client";

import { useState } from "react";
import { Article } from "contentlayer/generated";
import ArticleCard from "@/components/article/ArticleCard";
import { cn } from "@/lib/utils";
import { useScrollContext } from "@/providers/ScrollProgressProvider";
import { m } from "framer-motion";

type ArticleLoaderProps = {
    articles: Article[];
    articlesPerLoad: number;
};

export default function ArticleLoader({ articles, articlesPerLoad }: ArticleLoaderProps) {
    const { setContentLoaded } = useScrollContext(); // Use context here
    const [displayedArticles, setDisplayedPosts] = useState(articles.slice(0, articlesPerLoad));
    const [hasMore, setHasMore] = useState(articles.length > displayedArticles.length);

    const loadMore = () => {
        const nextPosts = articles.slice(displayedArticles.length, displayedArticles.length+articlesPerLoad);
        setDisplayedPosts([...displayedArticles, ...nextPosts]);
        if (articles.length <= displayedArticles.length + articlesPerLoad) {
            setHasMore(false);
        }
        setContentLoaded(false);
        setTimeout(() => setContentLoaded(true), 100);
    };

    return (
        <>
            {displayedArticles.map((article: Article, idx: number) => {
                const cardVariants = {
                    offscreen: {
                        scale: 0.5,
                        opacity: 0.1,
                    },
                    onscreen: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            ease: "easeInOut",
                            type: "spring",
                            bounce: 0.1,
                            duration: .75
                        }
                    }
                };

                return (
                    <m.div
                        key={idx}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        viewport={{ once: true }}
                    >
                        <ArticleCard idx={idx} article={article} />
                    </m.div>
                );
            })}
            <div className={"p-6 flex justify-center"}>
                {hasMore ? (
                    <m.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        type={"button"}
                        onClick={loadMore}
                        className={cn(
                            "rounded-full px-5 py-2",
                            "bg-white dark:bg-zinc-800/75",
                            "text-text_color dark:text-text_color-dark"
                        )}>
                        Load more
                    </m.button>
                ) : (
                    <p>You&apos;ve reached the end :)</p>
                )}
            </div>
        </>
    )
}
