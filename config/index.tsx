import { BlogConfig } from "@/config/type";
import { Square3Stack3DIcon} from "@heroicons/react/24/solid";

/**
 * Configure file for the blog.
 *
 */

export const blogConfig: BlogConfig = {
    url: 'https://next-sakurairo.qwq.xyz',
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
            icon: <Square3Stack3DIcon className="w-5 h-5" />,
            href: ""
        }
    ]
}
