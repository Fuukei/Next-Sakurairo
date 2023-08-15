"use client";

import { motion } from "framer-motion";
import { DateTag, NoTag, Tag } from "@/components/Tags";
import { type Article } from "contentlayer/generated";

interface ArticlesPageHeadingProps {
    article: Article; // Assuming you have a type named 'Article'
}

export default function ArticlesPageHeading({ article }: ArticlesPageHeadingProps) {
    const { title, date, lastEdited, tags } = article;

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
                        className={"text-lg md:text-3xl font-bold text-text_color dark:text-text_color-dark pt-20"}
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" }}
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
                        <DateTag date={date} lastEdited={lastEdited}/>
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
                                        <Tag key={tag} tag={tag}/>
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