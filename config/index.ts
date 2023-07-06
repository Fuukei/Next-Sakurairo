import { BlogConfig } from "@/config/type";
import { FaGithub } from "react-icons/fa6";
import { BiLink } from "react-icons/bi";
const { createElement } = require("react");
const colors = require("tailwindcss/colors");


/**
 * Configure file for the blog.
 *
 */

export const blogConfig: BlogConfig = {
    url: 'https://next-sakurairo.qwq.xyz',
    title: "Next Sakurairo",
    description: "A blog system made with Next.js.",
    author: "cocdeshijie",
    typist: "by cocdeshijie",
    articles_per_load: 5,

    navigation: [
        {
            title: "User Documentation",
            href: "/articles/documentation/user-en-US"
        },
        {
            title: "Developer Documentation",
            href: "/articles/documentation/developer-en-US"
        }
    ],

    background_image: {
        option: "APIBackgroundImage",
        settings: {
            url: "https://www.loliapi.com/acg/pc",
            filter: "grid"
        }
    },

    hero: {
        option: "IconHero",
        settings: {
            icon_path: "/img.png"
        }
    },

    header_logo: {
        option: "TextLogo",
        settings: {
            text_front: "Next Sakurairo",
            text_middle: "の",
            text_end: "Site",
            text_bottom: "qwq~"
        }
    },

    social: [
        {
            title: "GitHub",
            icon: createElement(FaGithub),
            href: "https://github.com/cocdeshijie/Next-Sakurairo"
        },
        {
            title: "Twitter",
            icon: createElement(BiLink),
            href: "https://next-sakurairo.qwq.xyz"
        }
    ],

    colors: {
        primary_color: {
            light: colors.pink[400],
            dark: colors.pink[600]
        },
        secondary_color: {
            light: colors.amber[400],
            dark: colors.amber[600]
        },
        accent_color: {
            light: colors.cyan[400],
            dark: colors.cyan[600]
        },
    },

    footer: "© cocdeshijie. All rights reserved.",

    comment: {
        option: "GiscusComment",
        settings: {
            repo: "Next-Sakurairo/Next-Sakurairo",
            repo_id: "R_kgDOJ4Togw",
            category: "Comments",
            category_id: "DIC_kwDOJ4Tog84CXt46",
            mapping: "url",
            input_position: "top",
            language: "en"
        }
    }
}
