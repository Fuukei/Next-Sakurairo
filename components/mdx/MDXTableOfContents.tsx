"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {ChevronUpIcon, ListBulletIcon} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import MDXStyles from "@/components/mdx/MDXStyles";

type MDXTableOfContentsProps = {
    raw: string;
};

interface Header {
    text: string;
    level: number;
}

export default function MDXTableOfContents({ raw }: MDXTableOfContentsProps) {
    const [toc, setToc] = useState<Header[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);

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

        const quarterHeight = window.innerHeight / 4;  // Calculate the quarter of the viewport height.
        const sectionTop = section.getBoundingClientRect().top;  // Get the position of the section.
        const position = sectionTop - quarterHeight + window.pageYOffset;  // Calculate the position you want to scroll to.
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
                return { text, level };
            });
        setToc(headers);
    }, [raw]);

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "fixed z-40 rounded-xl bottom-14 right-0 mr-2 lg:mr-6 mb-8 h-12 w-12",
                    "bg-slate-50 dark:bg-slate-800",
                )}
                variants={buttonVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <DropdownMenu.Trigger>
                    <div className={"text-primary_color dark:text-primary_color-dark"}>
                        <ListBulletIcon className={"w-full h-full p-1"}/>
                    </div>
                </DropdownMenu.Trigger>
            </motion.div>
            <AnimatePresence>
                {(open && isVisible)  &&  (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content className={"z-30"} side={"left"} align={"center"} sideOffset={10}>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }} // start off the right of the screen
                                animate={{ opacity: 1, x: 0 }} // animate back to normal position
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'easeIn', duration: 0.15 }}
                                className={cn(
                                    "my-2 p-2 rounded-lg max-w-xs overflow-scroll",
                                    "bg-slate-50 dark:bg-slate-800 text-primary_color dark:text-primary_color-dark"
                                )}>
                                <MDXStyles>
                                    <h2 className="text-sm font-semibold mb-3">Table of Contents</h2>
                                    <div className="text-sm whitespace-nowrap">
                                        {toc.map((header, index) => (
                                            <div key={index}
                                                 style={{ paddingLeft: `${header.level * 5}px` }}
                                                 onClick={(event) => {
                                                     const id = header.text.toLowerCase().split(' ').join('-');
                                                     scrollToSection(event, id);
                                                     setOpen(false);
                                                 }}>
                                                <a href={`#${header.text.toLowerCase().split(' ').join('-')}`}>
                                                    {header.text}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </MDXStyles>

                            </motion.div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                )}
            </AnimatePresence>
        </DropdownMenu.Root>
    );
}