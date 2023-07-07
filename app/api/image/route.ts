import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const imagesDir = path.join(process.cwd(), './public/image-api');
    const files = fs.readdirSync(imagesDir);
    const images = files.filter(file =>
        file.endsWith('.png') ||
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        file.endsWith('.gif') ||
        file.endsWith('.bmp') ||
        file.endsWith('.webp')
    );
    const image = images[Math.floor(Math.random() * images.length)];

    return NextResponse.redirect(new URL(`/image-api/${image}`, request.url))
}
