import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility function to merge Tailwind classes with clsx and tailwind-merge */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}