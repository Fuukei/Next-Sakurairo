"use client";

import { motion } from "framer-motion";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { DateTag, NoTag, Tag } from "@/components/Tags";

interface ArticlePageHeadingProps {
    title: string;
    date: string;
    tags?: string[];
}

export default function ArticlesPageHeading({ title, date, tags }: ArticlePageHeadingProps) {
    let FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    const hrVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={"flex w-full backdrop-blur-sm"}>
            <div className={"self-end w-full pb-2 md:pb-4 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                <motion.div
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    <motion.h1
                        className={"text-lg md:text-3xl font-bold text-primary_color dark:text-primary_color-dark"}
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        {title}
                    </motion.h1>
                    <motion.hr
                        style={{transformOrigin: "left"}}
                        className={"h-1 m-1 md:mb-2 border-0 rounded bg-gray-700"}
                        initial="hidden"
                        animate="visible"
                        variants={hrVariants}
                    />
                    <motion.div
                        className={"flex mb-2"}
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <DateTag date={date}/>
                    </motion.div>
                    <motion.div
                        className={"flex"}
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <div className={"flex mb-3"}>
                            {(() => {
                                if (!tags || tags.length === 0) {
                                    return (
                                        <NoTag/>
                                    )
                                } else {
                                    return tags.map((tag) => (
                                        <Tag key={tag}>
                                            <HashtagIcon className={"w-3 h-3 ml-1"}/>
                                            <div className={"text-xs py-1 px-1"}>{tag}</div>
                                        </Tag>
                                    ))
                                }
                            })()}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}