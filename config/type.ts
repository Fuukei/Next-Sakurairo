import { ReactNode } from "react";

export type BlogConfig = {
    /*
     * The URL of the blog.
     * @example "https://next-sakurairo.qwq.xyz"
     */
    url: string;

    /*
     * The title of the blog.
     * @example "Next Sakurairo"
     */
    title: string;

    /*
     * The description of the blog.
     * @example "A blog system made with Next.js."
     */
    description: string;

    /*
     * The author of the blog.
     * @example "cocdeshijie"
     */
    author: string;

    /*
     * This will appear in front page typing component.
     * @example "by cocdeshijie"
     */
    typewriter: string;

    /*
     * The number of articles per load.
     * @example 5
     */
    articles_per_load: number;

    /*
     * The navigation bar of the blog.
     */
    navigation: ({
        /*
         * The title of the navigation bar item.
         * @example "Home"
         */
        title: string;
        /*
         * The href of the navigation bar item.
         * @example "#"
         */
        href: string;
    } | {
        /*
         * The title of the parent navigation bar item.
         * @example "Services"
         */
        title: string;
        /*
         * The child navigation bar items.
         */
        child: {
            /*
             * The title of the child navigation bar item.
             * @example "Service1"
             */
            title: string;
            /*
             * The href of the child navigation bar item.
             * @example "#service1"
             */
            href: string;
        }[];
    })[];

    /*
     * The header of the blog.
     * There are multiple options for the header.
     */
    header:
        /*
         * Option Floating Header
         */
        | {
        option: "FloatingHeader";
        }

    /*
     * The background image of the blog.
     * There are multiple options for the background image.
     */
    background_image:
        /*
         * Use an image API for background image.
         * Don't set url if you want to use local image API.
         */
        | {
        option: "APIBackgroundImage";
        settings: {
            url: string;
            filter: "grid" | "dot" | "none";
        } }
        | {
        option: "APIBackgroundImage";
        settings: {
            url?: undefined;
            filter: "grid" | "dot" | "none";
        } }

    /*
     * The hero of the blog.
     * This will appear on the front page landing screen.
     * There are multiple options for the hero.
     */
    hero:
        | {
        option: "IconHero";
        settings: {
            icon_path: string;
        } }

    /*
     * The logo of the blog.
     * This will appear on the header.
     * There are multiple options for the logo.
     */
    header_logo:
        /*
         * Option Text Logo
         */
        | {
        option: "TextLogo";
        settings: {
            /*
             * The text at beginning of the logo.
             * @example "Next Sakurairo"
             */
            text_front: string;
            /*
             * The text at middle of the logo.
             * Recommend for something short because it will rotate on hover.
             * @example "の"
             */
            text_middle: string;
            /*
             * The text at end of the logo.
             * @example "Site"
             */
            text_end: string;
            /*
             * The text at bottom of the logo.
             * @example "qwq~"
             */
            text_bottom: string;
        } }
        /*
         * Option Image Logo
         */
        | { option: "ImageLogo";
            settings: {
                /*
                 * The path of the image.
                 * If logo.png is under public folder, the path should be "/logo.png".
                 * @example "/logo.png"
                 */
                image_path: string;
            } }

    /*
     * A list of social media links.
     * They will appear in front page landing screen.
     */
    social: {
        /*
         * The title of the social media link.
         * @example "GitHub"
         */
        title: string;
        /*
         * The icon of the social media link.
         * It is recommended to use icon libraries and pass them by using createElement(icon).
         * @example createElement(Square3Stack3DIcon)
         */
        icon: ReactNode;
        /*
         * The href of the social media link.
         * @example "https://github.com"
         */
        href: string;
    }[];

    /*
     * Color settings for tailwind.
     */
    colors: {
        primary_color: {
            light: string;
            dark: string;
        },
        secondary_color: {
            light: string;
            dark: string;
        },
        accent_color: {
            light: string;
            dark: string;
        },
    }

    /*
     * Comment component.
     * It will appear under each article.
     * There are multiple options for the comment component.
     */
    comment:
        /*
         * Option Giscus Comment
         * Check https://giscus.app/ on how to use it.
         */
        | {
        option: "GiscusComment";
        settings: {
            repo:  `${string}/${string}`;
            repo_id: string;
            category_id: string;
            category: string;
            mapping: "url" | "title" | "og:title" | "specific" | "number" | "pathname";
            input_position: "top" | "bottom";
            language: 'de' | 'gsw' | 'en' | 'es' | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'tr' | 'vi' | 'zh-CN' | 'zh-TW';
        }
    }

    /*
     * The footer of the blog.
     */
    footer: string;
}