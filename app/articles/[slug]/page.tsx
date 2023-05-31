import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXContent";
import {notFound} from "next/navigation";
import GiscusComments from "@/components/GiscusComments";

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const article = allArticles.find((article) => article.slug === params.slug) || {
        title: "Article not found"
    }
    return { title: article.title }
}

const ArticleLayout = ({ params }: { params: { slug: string } }) => {
    const article = allArticles.find((article) => article.slug === params.slug)

    if (!article) notFound()

    return (
        <div className={"min-h-screen bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
            <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                 style={{backgroundImage: 'url(' + article.image +')',
                     backgroundSize: 'cover'}}>
                <div className={"flex w-full backdrop-blur-sm"}>
                    <div className={"self-end w-full pb-8 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                        <h1 className={"text-lg md:text-3xl font-bold text-secondary_color dark:text-secondary_color-dark"}>
                            {article.title}
                        </h1>
                        <hr className={"h-1 mt-1 md:mb-2 border-0 rounded bg-gray-700"}/>
                        <div className={"flex mb-4"}>
                            <div className={"bg-accent_color/60 dark:bg-accent_color-dark/60 rounded-lg"}>
                                <span className={"text-xs py-1 px-2"}>
                                    Published on {format(parseISO(article.date), 'LLLL d, yyyy')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"pb-8 mx-4 lg:mx-auto lg:px-4 max-w-4xl"}>
                <MDXContent code={article.body.code} />
                <GiscusComments/>
            </div>
        </div>
    )
}

export default ArticleLayout