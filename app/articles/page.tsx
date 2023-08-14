import ArticleLoader from "@/components/article/ArticleLoader";
import { allArticles } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { blogConfig } from "@/config";

export default function ArticlesPage() {
    const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-slate-900/70"}>
            <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                <h1 className={"font-heading text-center text-xl md:text-2 xl mt-40 mb-10"}>Articles</h1>
                <ArticleLoader articles={articles} articlesPerLoad={blogConfig.articles_per_load} />
            </div>
        </div>
    )
}