import Link from "next/link";

/**
 * Use <Link> for internal links and <a> for external links and anchors
 * and open external links in a new tab
 */
function a({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
    if (href && href.startsWith('/')) {
        return <Link href={href}>{children}</Link>;
    }

    if (href && href.startsWith('#')) {
        return <a href={href}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export const MDXComponents = { a };