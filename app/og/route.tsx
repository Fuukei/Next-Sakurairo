import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import { blogConfig } from "@/config";

export async function GET(req: NextRequest) {
    const primaryColor = blogConfig.colors.primary_color.light;
    const secondaryColor = blogConfig.colors.secondary_color.light;
    const accentColor = blogConfig.colors.accent_color.light;


    return new ImageResponse(
        (
            <div tw={"h-full w-full flex flex-col items-center justify-center opacity-80"}
                 style={{
                     backgroundImage: `linear-gradient(15deg, ${secondaryColor} 10%, ${primaryColor} 30%, ${primaryColor} 70%, ${accentColor} 100%)`
                 }}
            >
                <div
                    tw="flex flex-row items-center text-7xl"
                    style={{
                        marginBottom:  '8rem',
                        fontFamily: 'Red Hat Display',
                    }}
                >
                    Placeholder Text
                </div>
            </div>
        )
    )
}