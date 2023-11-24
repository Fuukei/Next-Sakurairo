import { type Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchStore } from '@/stores/search-store';
import { DateTag, NoTag, Tag } from "@/components/Tags";

type ArticleCardProps = {
    article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

    return (
        <Link href={article.url}
              onClick={toggleSearch}
              className={cn(
                  "flex flex-wrap items-center justify-between rounded-md overflow-hidden",
                  "bg-zinc-100/60 dark:bg-zinc-900/60 drop-shadow-md",
                  "hover:bg-zinc-50/80 dark:hover:bg-zinc-950/80 duration-500",
                  "px-2 md:px-4 py-2",
                  )}>
            <div className={"space-y-1"}>
                <h3 className={"text-lg font-medium text-zinc-800 dark:text-zinc-300 line-clamp-2"}>
                    {article.title}
                </h3>
                <p className={"text-sm text-zinc-600 dark:text-zinc-500 line-clamp-2 md:line-clamp-1"}>
                    {article.excerpt}
                </p>
                <div className={"flex space-x-1 w-full overflow-x-scroll no-scrollbar"}>
                    <DateTag date={article.date} lastEdited={article.lastEdited}/>
                    {(() => {
                        if (!article.tags || article.tags.length === 0) {
                            return (
                                <NoTag />
                            )
                        } else {
                            return article.tags.map((tag) => (
                                <Tag key={tag} tag={tag}/>
                            ))
                        }
                    })()}
                </div>
            </div>
        </Link>
    )
}

type SearchResultsProps = {
    query: string;
    results: Article[];
};

export default function SearchResults({ query, results }: SearchResultsProps) {
    return (
        <div className={"flex-grow h-[90%] overflow-y-auto space-y-2"}>
            {!query ? (
                allArticles.map((article) => {
                    return (
                        <ArticleCard article={article} key={article.url}/>
                    );
                })
            ) : (
                results.map((article) => {
                    return (
                        <ArticleCard article={article} key={article.url}/>
                    );
                })
            )}
        </div>
    );
}