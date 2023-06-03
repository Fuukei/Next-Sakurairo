"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import MDXStyles from "@/components/mdx/MDXStyles";
import { motion } from "framer-motion";

type MDXContentProps = {
    code: string;
};

export function MDXContent({ code }: MDXContentProps) {
    const Component = useMDXComponent(code);

    const mdxVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={mdxVariants}
        >
            <MDXStyles>
                <Component components={MDXComponents} />
            </MDXStyles>
        </motion.div>
    );
}