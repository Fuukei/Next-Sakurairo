import { type Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { useSearchStore } from '@/stores/search-store';
import { HashtagIcon } from "@heroicons/react/24/solid";
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
                  "flex flex-wrap items-center justify-between rounded-md",
                  "bg-slate-50/60 dark:bg-gray-900/60 drop-shadow-md",
                  "px-2 md:px-4 py-2 hover:scale-95 duration-500"
                  )}>
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-slate-800 dark:text-slate-300">
                    {article.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-500 line-clamp-2 md:line-clamp-1">
                    {article.excerpt}
                </p>
                <div className={"flex space-x-1"}>
                    <DateTag date={article.date} />
                    {(() => {
                        if (!article.tags || article.tags.length === 0) {
                            return (
                                <NoTag />
                            )
                        } else {
                            return article.tags.map((tag) => (
                                <Tag key={tag}>
                                    <HashtagIcon className={"w-3 h-3 ml-1"}/>
                                    <div className={"text-xs py-1 px-1"}>{tag}</div>
                                </Tag>
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