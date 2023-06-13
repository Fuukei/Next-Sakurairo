
export type BlogConfig = {
    url: string | "https://next-sakurairo.qwq.xyz";
    author: string | "cocdeshijie";
    typist: string | "by cocdeshijie";

    navigation: {
        title: string;
        href: string;
    }[] | [{title: "Home", href:"/"}];
}