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
    typist: string;
    /*
     * The navigation bar of the blog.
     */
    navigation: {
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
    }[];
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
        option: "Text Logo";
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
        }
        }
        /*
         * Future options
         */
        | { option: 2; subSetting2: boolean }
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
}