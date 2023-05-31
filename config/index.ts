import {BlogConfig} from "@/config/type";

/**
 * Configure file for the blog.
 *
 */

const blogConfig: BlogConfig = {
    url: '',
    author: "cocdeshijie",

    navigation: [
        {
            title: "Item 1",
            href: "#"
        },
        {
            title: "Item 2",
            href: "#"
        }
    ]
}

module.exports = { blogConfig };