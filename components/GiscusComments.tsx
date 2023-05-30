"use client";

import Giscus from "@giscus/react";

export default function GiscusComments () {
    let theme = "preferred_color_scheme";
    if (localStorage.theme === "dark") {
        theme = "dark_dimmed";
    }
    if (localStorage.theme === "light") {
        theme = "light";
    }
    return (
        <Giscus
            repo={"cocdeshijie/next-sakurairo"}
            repoId={"R_kgDOJoJfqg"}
            category={"Announcements"}
            categoryId={"DIC_kwDOJoJfqs4CWz2I"}
            mapping={"url"}
            inputPosition={"bottom"}
            theme={theme}
            lang={"en"}
            loading={"lazy"}
        />
    )
}