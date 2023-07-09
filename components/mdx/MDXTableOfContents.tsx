"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiListBulletsBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import IconButton from "@/components/IconButton";

type MDXTableOfContentsProps = {
    raw: string;
};

interface Header {
    text: string;
    level: number;
    boundingTop: number;
    isActive: boolean;
}


export default function MDXTableOfContents({ raw }: MDXTableOfContentsProps) {
    const [offsetY, setOffsetY] = useState(0);
    const [toc, setToc] = useState<Header[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const marginTop = 200;

    const toggleVisibility = () => {
        setOpen(false); //close toc when scrolled
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToSection = (event: React.MouseEvent, id: string) => {
        event.preventDefault();  // Prevent default action.
        const section = document.getElementById(id);  // Get the section.

        if (!section) {
            // Exit if section is not found
            return;
        }

        const sectionTop = section.getBoundingClientRect().top;  // Get the position of the section.
        const position = sectionTop - marginTop + window.scrollY;  // Calculate the position you want to scroll to.
        window.scrollTo({top: position, behavior: 'smooth'});  // Scroll to the desired position.
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        const lines = raw.split("\n");
        let inCodeBlock = false; // Track if we're inside a code block
        const headers = lines
            .filter(line => {
                if (line.startsWith("```")) {
                    // If line starts with ```, invert the flag
                    inCodeBlock = !inCodeBlock;
                    return false;
                }
                // Only consider as header if we're not inside a code block, line starts with #, and # is followed by a space
                return !inCodeBlock && line.startsWith('#') && line.charAt(line.lastIndexOf('#') + 1) === ' ';
            })
            .map(line => {
                const level = line.lastIndexOf('#') + 1;
                const text = line.slice(level).trim();
                const el = document.getElementById(text.toLowerCase().split(' ').join('-'));  // Get the section element.
                const boundingTop = el ? el.getBoundingClientRect().top : 0;
                return { text, level, boundingTop, isActive: false };
            });
        setToc(headers);
    }, [raw]);

    useEffect(() => {
        const onScroll = () => {
            setOffsetY(window.pageYOffset);
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (toc.length === 0) return;

        if (toc.length === 1) {
            toc[0].isActive = true;
            return;
        }

        toc.forEach((header: Header, index: number) => {
            if (index === 0) {
                header.isActive =
                    toc[index + 1].boundingTop > offsetY + marginTop;
            } else {
                if (toc[index + 1]) {
                    header.isActive =
                        toc[index + 1].boundingTop > offsetY + marginTop &&
                        toc[index].boundingTop <= offsetY + marginTop;
                } else {
                    header.isActive = toc[index].boundingTop <= offsetY + marginTop;
                }
            }
        });
    }, [toc, offsetY]);

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
            <motion.div
                className={cn(
                    "fixed z-30 bottom-14 right-0 mr-2 lg:mr-6 mb-8",
                )}
                variants={buttonVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}>
                <DropdownMenu.Trigger>
                    <IconButton>
                        <div className={"text-primary_color dark:text-primary_color-dark"}>
                            <PiListBulletsBold className={"w-6 h-6"}/>
                        </div>
                    </IconButton>
                </DropdownMenu.Trigger>
            </motion.div>

            <AnimatePresence>
                {(open && isVisible)  &&  (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content className={"z-30"} side={"left"} align={"center"} sideOffset={10}>
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'easeIn', duration: 0.15 }}
                                className={cn(
                                    "mr-2 p-4 rounded-lg max-w-xs md:max-w-md",
                                    "bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-2xl",
                                    "text-primary_color dark:text-primary_color-dark"
                                )}>
                                <div className={cn(
                                    "prose prose-slate dark:prose-invert dark:text-slate-300",
                                    "prose-headings:text-primary_color dark:prose-headings:text-slate-100",
                                    "prose-a:no-underline hover:prose-a:underline",
                                    "prose-hr:border-slate-700 dark:prose-hr:border-slate-300",
                                )}>
                                    <div className="text-lg font-medium mb-2 text-primary_color dark:text-primary_color-dark">
                                        Table of Contents
                                    </div>
                                    <hr className={"my-2"}/>
                                    <div className="text-sm whitespace-nowrap antialiased overflow-x-auto">
                                        {toc.map((header, index) => {
                                            const lowestLevel = Math.min(...toc.map(header => header.level)); // Find the smallest heading level.
                                            const adjustedLevel = header.level - lowestLevel; // Adjust the current heading level.
                                            return (
                                                <div
                                                    key={index}
                                                    style={{ paddingLeft: `${adjustedLevel * 20}px` }} // Use the adjusted level to calculate padding.
                                                    onClick={(event) => {
                                                        const id = header.text.toLowerCase().split(' ').join('-');
                                                        scrollToSection(event, id);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <a
                                                        href={`#${header.text.toLowerCase().split(' ').join('-')}`}
                                                        className={header.isActive ? "text-primary_color dark:text-primary_color-dark" : ""}
                                                    >
                                                        {header.text}
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                )}
            </AnimatePresence>
        </DropdownMenu.Root>
    );
}