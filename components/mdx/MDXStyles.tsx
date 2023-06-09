import { cn } from '@/lib/utils';
import "@code-hike/mdx/dist/index.css"

type MDXStylesProps = {
    children: React.ReactNode;
};

export default function MDXStyles({ children }: MDXStylesProps) {
    return (
        <section
            className={cn(
                "text-justify max-w-none hyphens-auto",
                "prose prose-slate dark:prose-invert dark:text-pink-50",
                "prose-headings:flex prose-headings:items-center prose-headings:drop-shadow-sm dark:prose-headings:text-pink-200",
                "prose-ul:my-6 prose-li:my-0 marker:text-slate-600 dark:marker:text-slate-400",
                "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
                "prose-blockquote:border-l-slate-800 dark:prose-blockquote:border-l-slate-300 dark:prose-blockquote:text-pink-50",
                "prose-hr:border-slate-700 dark:prose-hr:border-slate-300"
            )}
        >
            {children}
        </section>
    )
}