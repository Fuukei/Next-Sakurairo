"use client"

import Typist from "react-typist-component";
import { blogConfig } from "@/config";


export function Typing() {

    return (
        <Typist typingDelay={100}
        >
            <span>{blogConfig.typist}</span>
        </Typist>
    )
}