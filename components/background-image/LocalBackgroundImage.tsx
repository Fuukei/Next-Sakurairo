import Image from "next/image";
import fs from 'fs';

const backgroundImageSetting = require("@/config").blogConfig.background_image.settings;

async function getImage() {
    const files = fs.readdirSync("./public/background-image");
    const images = files.filter(file =>
        file.endsWith('.png') ||
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        file.endsWith('.gif') ||
        file.endsWith('.bmp') ||
        file.endsWith('.webp')
    );
    return images[Math.floor(Math.random() * images.length)]
}

export default async function LocalBackgroundImage() {
    const image = await getImage()

    return (
        <>
            <Image
                src={`/background-image/${image}`}
                alt={"bg"}
                className={"-z-50 fixed"}
                width={0}
                height={0}
                sizes={"100vw"}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority={true}
                unoptimized={true}
            />
            <div className={"w-full h-screen -z-40"}
                 style={{ backgroundImage: `url(/filters/${backgroundImageSetting.filter}.png)` }}
            />
        </>
    );
}
