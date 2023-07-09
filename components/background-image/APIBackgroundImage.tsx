import Image from "next/image";

const backgroundImageSetting = require("@/config").blogConfig.background_image.settings

export default function APIBackgroundImage() {

    const image = backgroundImageSetting.image ?? "/api/image-api";
    return (
        <>
            <Image
                src={image}
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
