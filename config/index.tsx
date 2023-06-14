import { BlogConfig } from "@/config/type";
import { AcademicCapIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";

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

    social: [
        {
            title: "GitHub",
            icon: <Square3Stack3DIcon/>,
            href: "https://github.com"
        },
        {
            title: "Twitter",
            icon: <AcademicCapIcon/>,
            href: "https://twitter.com"
        }
    ]
}
