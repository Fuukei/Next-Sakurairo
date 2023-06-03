"use client";

import {motion} from "framer-motion";
import {format, parseISO} from "date-fns";

interface ArticlePageHeadingProps {
    title: string;
    date: string;
}

export default function ArticlePageHeading({ title, date }: ArticlePageHeadingProps) {
    const textVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
    };

    const hrVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={"flex w-full backdrop-blur-sm"}>
            <div className={"self-end w-full pb-8 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                <motion.h1
                    className={"text-lg md:text-3xl font-bold text-primary_color dark:text-primary_color-dark"}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {title}
                </motion.h1>
                <motion.hr
                    style={{transformOrigin: "left"}}
                    className={"h-1 mt-1 md:mb-2 border-0 rounded bg-gray-700"}
                    initial="hidden"
                    animate="visible"
                    variants={hrVariants}
                />
                <motion.div
                    className={"flex mb-4"}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <div className={"bg-accent_color/60 dark:bg-accent_color-dark/60 rounded-lg"}>
                        <span className={"text-xs py-1 px-2"}>
                            Published on {format(parseISO(date), 'LLLL d, yyyy')}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}