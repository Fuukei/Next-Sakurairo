"use client";

import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
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

    const h1Variants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
    };

    const hrVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.5 } }
    };

    const mdxVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={"min-h-screen bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
            <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                 style={{backgroundImage: 'url(' + article.image +')',
                     backgroundSize: 'cover'}}>
                <div className={"flex w-full backdrop-blur-sm"}>
                    <div className={"self-end w-full pb-8 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                        <motion.h1
                            className={"text-lg md:text-3xl font-bold text-primary_color dark:text-primary_color-dark"}
                            initial="hidden"
                            animate="visible"
                            variants={h1Variants}
                        >
                            {article.title}
                        </motion.h1>
                        <motion.hr
                            style={{transformOrigin: "left"}}
                            className={"h-1 mt-1 md:mb-2 border-0 rounded bg-gray-700"}
                            initial="hidden"
                            animate="visible"
                            variants={hrVariants}
                        />
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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={mdxVariants}
                >
                    <MDXContent code={article.body.code} />
                </motion.div>
                <GiscusComments/>
            </div>
        </div>
    )
}

export default ArticleLayout