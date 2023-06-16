"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import MDXStyles from "@/components/mdx/MDXStyles";
import { motion } from "framer-motion";

type MDXContentProps = {
    code: string;
};

export default function MDXContent({ code }: MDXContentProps) {
    const Component = useMDXComponent(code);

    const mdxVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={mdxVariants}
        >
            <MDXStyles>
                <Component components={MDXComponents} />
            </MDXStyles>
        </motion.div>
    );
}