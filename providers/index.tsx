"use client";

import { PropsWithChildren } from "react";
import { LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { ScrollProgressProvider } from "@/providers/ScrollProgressProvider";

const loadFeatures = () =>
    import('./lazy-framer-motion').then((res) => res.default)

export function Providers({ children }: PropsWithChildren) {
    return (
        <LazyMotion features={loadFeatures} strict>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ScrollProgressProvider>
                    {children}
                </ScrollProgressProvider>
            </ThemeProvider>
        </LazyMotion>

    )
}