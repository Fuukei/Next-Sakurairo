import Link from "next/link";

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

function generateId(children: React.ReactNode): string {
    if (typeof children === "string") {
        return children.toLowerCase().split(' ').join('-');
    }
    return '';
}

function H1({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h1 id={id}>{children}</h1>
}

function H2({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h2 id={id}>{children}</h2>
}

function H3({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h3 id={id}>{children}</h3>
}

function H4({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h4 id={id}>{children}</h4>
}

function H5({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h5 id={id}>{children}</h5>
}

function H6({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    return <h6 id={id}>{children}</h6>
}

export const MDXComponents = { a, h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };
