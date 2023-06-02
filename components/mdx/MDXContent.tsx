"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import MDXStyles from "@/components/mdx/MDXStyles";

type MDXContentProps = {
    code: string;
};

export function MDXContent({ code }: MDXContentProps) {
    const Component = useMDXComponent(code);

    return (
        <MDXStyles>
            <Component components={MDXComponents} />
        </MDXStyles>
    );
}