import { type Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import {cn} from "@/lib/utils";
import Link from "next/link";
import { useSearchStore } from '@/stores/search-store';

type SearchResultsProps = {
    query: string;
    results: Article[];
};

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
                  "px-2 md:px-4 py-4"
                  )}>
            <div className="">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-300">
                    {article.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-500">
                    {article.url}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-500">
                    {article.date}
                </p>
            </div>
            <div className="">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{article.title}</h3>
            </div>
        </Link>
    )
}

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