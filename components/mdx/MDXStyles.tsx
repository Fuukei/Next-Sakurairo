import { cn } from '@/lib/utils';
import "@code-hike/mdx/dist/index.css"

type MDXStylesProps = {
    children: React.ReactNode;
};

export default function MDXStyles({ children }: MDXStylesProps) {
    return (
        <section
            className={cn(
                "text-justify md:text-left max-w-none",
                "prose md:prose-lg dark:prose-invert dark:text-slate-300",
                "prose-headings:text-primary_color dark:prose-headings:text-slate-100",
                "prose-ul:my-6 prose-li:my-0 marker:text-slate-600 dark:marker:text-slate-300",
                "prose-a:text-primary_color-dark/80 dark:prose-a:text-primary_color/80 prose-a:no-underline",
                "hover:prose-a:text-primary_color-dark hover:dark:prose-a:text-primary_color hover:prose-a:underline",
                "prose-blockquote:border-l-slate-800 dark:prose-blockquote:border-l-slate-300",
                "dark:prose-blockquote:text-primary_color",
                "prose-hr:border-slate-700 dark:prose-hr:border-slate-300",
                "prose-th:border-secondary_color/75 dark:prose-th:border-secondary_color-dark/75 prose-th:border-b-2 prose-th:font-bold",
                "prose-td:border-secondary_color/50 dark:prose-td:border-secondary_color-dark/50 prose-td:border-b"
            )}
        >
            {children}
        </section>
    )
}