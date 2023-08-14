import { allArticles } from "contentlayer/generated";
import ArticleLoader from "@/components/article/ArticleLoader";
import { blogConfig } from "@/config";

export const generateStaticParams = () => [...new Set(allArticles.map(article => article.tags).flat())].map(tag => ({ slug: tag }));

const TagsPage = ({ params }: { params: { slug: string } }) => {
    const articlesWithTag = allArticles.filter(article =>
        article.tags && article.tags.map(tag => tag.trim()).includes(params.slug.trim())
    );

    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-gray-800/70"}>
            <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                <h1 className={"font-heading text-center text-xl md:text-2 xl mt-40 mb-10"}>Articles with {params.slug} tag</h1>
                <ArticleLoader articles={articlesWithTag} articlesPerLoad={blogConfig.articles_per_load} />
            </div>
        </div>
    );
}


export default TagsPage;
