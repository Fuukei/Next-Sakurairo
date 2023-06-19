import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import { blogConfig } from "@/config";

function generateGradientColors(firstColor: string, secondColor: string, thirdColor: string): string {
    let interpolatedColors: string[] = [];

    function interpolateColor(color1: string, color2: string, factor: number): string {
        let r1: number = parseInt(color1.substring(1, 3), 16);
        let g1: number = parseInt(color1.substring(3, 5), 16);
        let b1: number = parseInt(color1.substring(5, 7), 16);

        let r2: number = parseInt(color2.substring(1, 3), 16);
        let g2: number = parseInt(color2.substring(3, 5), 16);
        let b2: number = parseInt(color2.substring(5, 7), 16);

        let r: number = Math.round(r1 + factor * (r2 - r1));
        let g: number = Math.round(g1 + factor * (g2 - g1));
        let b: number = Math.round(b1 + factor * (b2 - b1));

        return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    }

    for (let factor = 0.2; factor <= 1; factor += 0.2) {
        interpolatedColors.push(`${interpolateColor(firstColor, secondColor, factor)} ${Math.round(factor * 20)}%`);
    }

    for (let factor = 0.2; factor <= 1; factor += 0.2) {
        interpolatedColors.push(`${interpolateColor(secondColor, thirdColor, factor)} ${Math.round(factor * 20 + 80)}%`);
    }

    return `${firstColor} 0%, ${interpolatedColors.join(", ")}, ${thirdColor} 100%`;
}

export async function GET(req: NextRequest) {
    const primaryColor = blogConfig.colors.primary_color.light;
    const secondaryColor = blogConfig.colors.secondary_color.light;
    const accentColor = blogConfig.colors.accent_color.light;
    const gradientColors: string = generateGradientColors(secondaryColor, primaryColor, accentColor);

    try {
        // ?=......
        const { searchParams } = new URL(req.url);
        // title=<title>
        let title = searchParams.has("title") ? searchParams.get('title') : false;
        if (title && title.length > 50) {
            title = title.slice(0, 50) + "...";
        }
        // excerpt=<excerpt>
        let excerpt = searchParams.has("excerpt") ? searchParams.get('excerpt') : false;
        if (excerpt && excerpt.length > 200) {
            excerpt = excerpt.slice(0, 200) + "...";
        }

        return new ImageResponse(
            (
                <div tw={"h-full w-full flex bg-white"}>
                    <div tw={"h-full w-full flex flex-col items-center justify-center opacity-70"}
                         style={{
                             backgroundImage: `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${gradientColors})`
                         }}
                    >
                        <div tw="flex flex-row items-center text-7xl mb-8">
                            {blogConfig.title}
                        </div>
                        <div tw="text-5xl text-slate-800 text-center mb-4">
                            {title}
                        </div>
                        <div tw="text-3xl text-slate-800 text-center">
                            {excerpt}
                        </div>
                    </div>
                </div>
            )
        )
    } catch (e: any) {
        return new Response("Failed to generate og image", {
            status: 500,
        });
    }
}