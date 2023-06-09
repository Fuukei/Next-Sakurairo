"use client";

import Link from "next/link";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { useState } from "react"

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
    const [hover, setHover] = useState(false);

    return (
        <h1 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                    "opacity-30 duration-200": !hover
                },
                    "ml-1 w-6 h-6",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h1>
    )
}

function H2({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    const [hover, setHover] = useState(false);

    return (
        <h2 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                        "opacity-30 duration-200": !hover
                    },
                    "ml-1 w-5 h-5",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h2>
    )
}

function H3({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    const [hover, setHover] = useState(false);

    return (
        <h3 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                        "opacity-30 duration-200": !hover
                    },
                    "ml-1 w-4 h-4",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h3>
    )
}

function H4({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    const [hover, setHover] = useState(false);

    return (
        <h4 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                        "opacity-30 duration-200": !hover
                    },
                    "ml-1 w-3.5 h-3.5",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h4>
    )
}

function H5({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    const [hover, setHover] = useState(false);

    return (
        <h5 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                        "opacity-30 duration-200": !hover
                    },
                    "ml-1 w-3.5 h-3.5",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h5>
    )
}

function H6({ children }: React.HTMLProps<HTMLHeadingElement>) {
    const id = generateId(children);
    const [hover, setHover] = useState(false);

    return (
        <h6 onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            id={id}
            className={"flex items-baseline"}
        >
            {children}
            <Link href={`#${id}`}>
                <HashtagIcon className={cn({
                        "opacity-30 duration-200": !hover
                    },
                    "ml-1 w-3.5 h-3.5",
                    "text-primary_color dark:text-primary_color-dark"
                )}/>
            </Link>
        </h6>
    )
}

export const MDXComponents = { a, h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };
