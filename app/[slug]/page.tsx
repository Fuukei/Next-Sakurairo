import { allPages} from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import { blogConfig } from "@/config";
import PagesPageHeading from "@/components/PagesPageHeading";
import {cn} from "@/lib/utils";

export const generateStaticParams = async () => allPages.map((page) => ({ slug: page.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const { title, url} = allPages.find((page) => page.slug === params.slug) || {
        title: "Page not found",
        url: "/",
    }

    const ogImage = {
        url: `${blogConfig.url}/og?title=${title}`,
    };

    return {
        title: title,
        description: title,
        openGraph: {
            type: "website",
            url: `${blogConfig.url}${url}`,
            title: title,
            description: title,
            images: [ogImage]
        },
        twitter: {
            title: title,
            description: title,
            images: ogImage,
            card: 'summary_large_image',
        }
    }
}

const PageLayout = ({ params }: { params: { slug: string } }) => {
    const page = allPages.find((page) => page.slug === params.slug)

    if (!page) notFound()

    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-slate-50/50 dark:bg-slate-900/70"}>
            <PagesPageHeading title={page.title} />
            <div className={cn(
                "py-8 mx-4 md:mx-auto lg:px-4",
                "md:max-w-3xl lg:max-w-4xl"
            )}>
                <MDXContent code={page.body.code} />
            </div>
        </div>
    )
}


export default PageLayout