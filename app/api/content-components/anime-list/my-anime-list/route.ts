import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')
    const sort = searchParams.get('sort')?.replace(/\$/g, "&");
    const res = await fetch(`https://myanimelist.net/animelist/${username}/load.json?${sort}`, {})
    const data = await res.json()

    return NextResponse.json(data)
}