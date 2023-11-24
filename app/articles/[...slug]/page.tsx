import { allArticles } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import Comment from "@/components/comment/Comment";
import ArticlesPageHeading from "@/components/article/ArticlesPageHeading";
import MDXTableOfContents from "@/components/mdx/MDXTableOfContents";
import { type Metadata } from "next/types";
import { blogConfig } from "@/config";
import { cn } from "@/lib/utils";

type ArticlePageProps = {
    params: {
        slug: string[];
    };
};

export async function generateStaticParams(): Promise<ArticlePageProps['params'][]> {
    return allArticles.map(({slug}) => ({
        slug: slug.split('/')
    }));
}

export const generateMetadata = ({ params }: ArticlePageProps): Metadata => {
    const { title, url, excerpt, date} =  allArticles.find(({ slug }) => slug === params.slug.join('/')) || {
        title: "Article not found",
        excerpt: "",
        url: "/",
        date: new Date().toISOString()
    }

    const ogImage = {
        url: `${blogConfig.url}/og?title=${title}&excerpt=${excerpt ?? ''}`,
    };

    return {
        title: title,
        description: excerpt,
        openGraph: {
            type: "article",
            url: `${blogConfig.url}${url}`,
            title: title,
            description: excerpt,
            publishedTime: date,
            images: [ogImage]
        },
        twitter: {
            title: title,
            description: excerpt,
            images: ogImage,
            card: 'summary_large_image',
        }
    }
}

const ArticlePage = ({ params }: ArticlePageProps) => {
    const article = allArticles.find(({ slug }) => slug === params.slug.join('/'));

    if (!article) notFound()

    return (
        <>
            <div className={"min-h-screen backdrop-blur-3xl bg-zinc-50/50 dark:bg-zinc-900/70"}>
                <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                     style={{backgroundImage: 'url(' + article.image +')', backgroundSize: 'cover'}}>
                    <ArticlesPageHeading article={article}/>
                </div>
                <div className={cn(
                    "pb-8 mx-4 md:mx-auto lg:px-4",
                    "md:max-w-3xl lg:max-w-4xl"
                )}>
                    <div className={"py-8"}>
                        <MDXContent code={article.body.code} />
                        <Comment />
                    </div>
                </div>
            </div>
            <MDXTableOfContents raw={article.body.raw} />
        </>
    )
}

export default ArticlePage