"use client";

import Giscus from "@giscus/react";

export default function GiscusComments () {
    return (
        <Giscus
            repo={"cocdeshijie/next-sakurairo"}
            repoId={"R_kgDOJoJfqg"}
            category={"Announcements"}
            categoryId={"DIC_kwDOJoJfqs4CWz2I"}
            mapping={"url"}
            inputPosition={"bottom"}
            theme={"preferred_color_scheme"}
            lang={"en"}
            loading={"lazy"}
        />
    )
}