"use client";

import { useState } from "react";
import { Article } from "contentlayer/generated";
import ArticleCard from "@/components/ArticleCard";

type ArticleLoaderProps = {
    articles: Article[];
    articlesPerLoad: number;
};

export default function ArticleLoader({ articles, articlesPerLoad }: ArticleLoaderProps) {
    const [displayedArticles, setDisplayedPosts] = useState(articles.splice(0, articlesPerLoad));
    const [hasMore, setHasMore] = useState(articles.length > 0);

    const loadMore = () => {
        const nextPosts = articles.splice(0,articlesPerLoad);
        setDisplayedPosts([...displayedArticles, ...nextPosts]);
        if (articles.length === 0) {
            setHasMore(false);
        }
    };

    return (
        <>
            {displayedArticles.map((article: Article, idx: number) => (
                <ArticleCard key={idx} {...article} />
            ))}
            {hasMore ? (
                <button onClick={loadMore}>test: {articles.length}</button>
            ) : (
                <p>No more articles</p>
            )}
        </>
    )
}