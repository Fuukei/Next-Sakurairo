import { allArticles } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import GiscusComments from "@/components/GiscusComments";
import ArticlePageHeading from "@/components/ArticlePageHeading";
import MDXTableOfContents from "@/components/mdx/MDXTableOfContents";
import { type Metadata } from "next/types";
import { blogConfig } from "@/config";

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
    const { title, url} =  allArticles.find(({ slug }) => slug === params.slug.join('/')) || {
        title: "Article not found",
        url: "/"
    }
    return {
        title: title,
        description: "Description placeholder",
        openGraph: {
            type: "website",
            url: `${blogConfig.url}${url}`,
            title: title,
            description: "Description placeholder",
        },
        twitter: {
            title: title,
            description: "Description placeholder"
        }
    }
}

const ArticlePage = ({ params }: ArticlePageProps) => {
    const article = allArticles.find(({ slug }) => slug === params.slug.join('/'));

    if (!article) notFound()

    return (
        <>
            <div className={"min-h-screen bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
                <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                     style={{backgroundImage: 'url(' + article.image +')', backgroundSize: 'cover'}}>
                    <ArticlePageHeading title={article.title} date={article.date} tags={article.tags}/>
                </div>
                <div className={"pb-8 mx-4 lg:mx-auto lg:px-4 max-w-4xl flex"}>
                    <div className={"flex-grow py-8"}>
                        <MDXContent code={article.body.code} />
                        <GiscusComments />
                    </div>
                </div>
            </div>
            <MDXTableOfContents raw={article.body.raw} />
        </>
    )
}

export default ArticlePage