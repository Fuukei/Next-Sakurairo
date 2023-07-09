"use client"

import Typewriter from 'typewriter-effect';
import { blogConfig } from "@/config";


export function Typing() {

    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(blogConfig.typewriter).start();
            }}
        />
    )
}