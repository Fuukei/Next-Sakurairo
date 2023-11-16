import { allArticles } from "contentlayer/generated";
import ArticleLoader from "@/components/article/ArticleLoader";
import { blogConfig } from "@/config";
import {Tag} from "@/components/Tags";

export const generateStaticParams = () => [...new Set(allArticles.map(article => article.tags).flat())].map(tag => ({ slug: tag }));

const TagsPage = ({ params }: { params: { slug: string } }) => {
    const decodedSlug = decodeURIComponent(params.slug); // Decoding the slug

    const articlesWithTag = allArticles.filter(article =>
        article.tags && article.tags.map(tag => tag.trim()).includes(decodedSlug.trim())
    );

    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-slate-900/70"}>
            <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                <h1 className={"font-heading text-center text-xl md:text-2 xl mt-40 mb-10"}>
                    Articles with <Tag tag={decodedSlug}/>
                </h1>
                <ArticleLoader articles={articlesWithTag} articlesPerLoad={blogConfig.articles_per_load} />
            </div>
        </div>
    );
}



export default TagsPage;
