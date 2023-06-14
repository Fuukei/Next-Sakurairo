import { allPages} from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import {notFound} from "next/navigation";
import {blogConfig} from "@/config";

export const generateStaticParams = async () => allPages.map((page) => ({ slug: page.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const { title, url} = allPages.find((page) => page.slug === params.slug) || {
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

const PageLayout = ({ params }: { params: { slug: string } }) => {
    const page = allPages.find((page) => page.slug === params.slug)

    if (!page) notFound()

    return (
        <div className={"min-h-screen bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
            <MDXContent code={page.body.code} />
        </div>
    )
}


export default PageLayout