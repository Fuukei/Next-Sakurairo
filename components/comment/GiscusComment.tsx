"use client";

import Giscus from "@giscus/react";
import { useEffect, useState} from "react";

const commentSetting = require("@/config").blogConfig.comment.settings

export default function GiscusComment () {
    let theme = "preferred_color_scheme";
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted) {
        if (localStorage.theme === "dark") {
            theme = "dark_dimmed";
        }
        if (localStorage.theme === "light") {
            theme = "light";
        }
    }
    return (
        <div className={"md:px-8 mt-8"}>
            <Giscus
                repo={commentSetting.repo}
                repoId={commentSetting.repo_id}
                category={commentSetting.category}
                categoryId={commentSetting.category_id}
                mapping={commentSetting.mapping}
                inputPosition={commentSetting.input_position}
                theme={theme}
                lang={commentSetting.language}
                loading={"lazy"}
            />
        </div>

    )
}