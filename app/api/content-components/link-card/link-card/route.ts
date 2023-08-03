import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const url = decodeURIComponent(searchParams.get('url') || '')

    const ogs = require('open-graph-scraper');
    const options = { url: url };
    const data = await ogs(options);
    let { error, result } = data;
    if (error) {
        result = {
            "ogTitle": "Error",
            "ogDescription": "Error retrieving metadata.",
        }
    }
    return NextResponse.json(result)
}
