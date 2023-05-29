import { allPages} from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/mdx-content";
import {notFound} from "next/navigation";
import ArticleLayout from "@/app/articles/[slug]/page";

export const generateStaticParams = async () => allPages.map((page) => ({ slug: page.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const page = allPages.find((page) => page.slug === params.slug)
    if (!page) throw new Error(`Page not found for slug: ${params.slug}`)
    return { title: page.title }
}

const PageLayout = ({ params }: { params: { slug: string } }) => {
    // Find the page for the current page.
    const page = allPages.find((page) => page.slug === params.slug)

    // 404 if the page does not exist.
    if (!page) notFound()

    return (
        <div className={"min-h-screen bg-white/60 backdrop-blur-md"}>
            <MDXContent code={page.body.code} />
        </div>
    )
}


export default PageLayout