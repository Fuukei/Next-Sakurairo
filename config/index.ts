import { BlogConfig } from "@/config/type";
const { createElement } = require("react");
import { AcademicCapIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";
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
            title: "Item 1",
            href: "#"
        },
        {
            title: "Item 2",
            href: "#"
        }
    ],

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
            icon: createElement(Square3Stack3DIcon),
            href: "https://github.com"
        },
        {
            title: "Twitter",
            icon: createElement(AcademicCapIcon),
            href: "https://twitter.com"
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
    }
}
