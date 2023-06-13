import { ReactNode } from "react";

export type BlogConfig = {
    url: string;
    author: string;
    typist: string;

    navigation: {
        title: string;
        href: string;
    }[];

    social: {
        title: string;
        icon: ReactNode;
        href: string;
    }[];
}