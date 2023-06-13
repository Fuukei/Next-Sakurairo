import { type Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { useSearchStore } from '@/stores/search-store';
import { format, parseISO } from "date-fns";
import { HashtagIcon } from "@heroicons/react/24/solid";

type ArticleCardProps = {
    article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
    const toggleSearch = useSearchStore((state) => state.toggleSearch);

    return (
        <Link href={article.url}
              onClick={toggleSearch}
              className={cn(
                  "flex flex-wrap items-center justify-between rounded-md",
                  "bg-slate-50/90 dark:bg-slate-900/90",
                  "px-2 md:px-4 py-2"
                  )}>
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-300">
                    {article.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-500 line-clamp-2 md:line-clamp-1">
                    {article.excerpt}
                </p>
                <div className={"flex space-x-1"}>
                    <div className={"bg-accent_color/50 dark:bg-accent_color-dark/70 rounded-md"}>
                        <div className={"text-xs py-0.5 px-1"}>Posted on {format(parseISO(article.date), 'LLLL d, yyyy')}</div>
                    </div>
                    {(() => {
                        if (!article.tags || article.tags.length === 0) {
                            return (
                                <div className={cn(
                                    "inline-flex text-xs rounded-md items-center",
                                    "bg-secondary_color/20 dark:bg-secondary_color-dark/20"
                                )}>
                                    <div className={"text-xs py-1 px-1 opacity-70"}>No tags</div>
                                </div>
                            )
                        } else {
                            return article.tags.map((tag) => (
                                <div key={tag}
                                     className={cn(
                                         "inline-flex text-xs rounded-md items-center",
                                         "bg-secondary_color/50 dark:bg-secondary_color-dark/70"
                                     )}>
                                    <HashtagIcon className={"w-3 h-3 ml-1"}/>
                                    <div className={"text-xs py-1 px-1"}>{tag}</div>
                                </div>
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
        <div className={"flex-grow overflow-scroll space-y-2"}>
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