
export type BlogConfig = {
    url: string | "next-sakurairo.qwq.xyz";
    author: string | "cocdeshijie";

    navigation: {
        title: string;
        href: string;
    }[] | [{title: "Home", href:"/"}];
}