"use client";

import { PropsWithChildren } from "react";
import { LazyMotion } from "framer-motion";
import { ThemeProvider} from "@/providers/ThemeProvider";
import { ScrollProgressProvider } from "@/providers/ScrollProgressProvider";
import BackgroundImage from "@/components/background-image/BackgroundImage";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import ToTop from "@/components/ToTop";
import Search from "@/components/search/Search";
import SearchTrigger from "@/components/search/SearchTrigger";
import Settings from "@/components/Settings";

const loadFeatures = () =>
    import('./lazy-framer-motion').then((res) => res.default)

export function Providers({ children }: PropsWithChildren) {
    return (
        <LazyMotion features={loadFeatures} strict>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ScrollProgressProvider>
                    <BackgroundImage/>
                    <div className={"absolute top-0 w-full"}>
                        <div className={"flex flex-col"}>
                            <Header />
                            {children}
                            <Footer />
                            <TailwindIndicator />
                            <ToTop />
                            <Search />
                            <SearchTrigger />
                            <Settings />
                        </div>
                    </div>
                </ScrollProgressProvider>
            </ThemeProvider>
        </LazyMotion>

    )
}