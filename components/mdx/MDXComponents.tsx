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

export const MDXComponents = { a };
