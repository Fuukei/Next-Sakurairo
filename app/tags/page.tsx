import { allArticles } from "contentlayer/generated";
import { Tag } from "@/components/Tags";

export default function TagsPage() {
    const allTags = allArticles.map(article => article.tags).flat().filter(Boolean);
    const uniqueTags = [...new Set(allTags)] as string[];

    return (
        <div className={"min-h-screen backdrop-blur-3xl bg-zinc-50/50 dark:bg-zinc-900/70"}>
            <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                <h1 className={"font-heading text-center text-xl md:text-2 xl mt-40 mb-10"}>Tags</h1>
                {uniqueTags.map(tag => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
        </div>
    )
}