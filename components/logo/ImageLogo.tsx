import Image from "next/image";

const logoSetting = require("@/config").blogConfig.header_logo.settings

export default function ImageLogo({logoHover}: {logoHover: boolean}) {

    return (
        <div className={"h-16"}>
            <Image src={logoSetting.image_path}
                   alt={"logo"}
                   width={0}
                   height={0}
                   sizes="100vw"
                   style={{ width: 'auto', height: '90%' }}
            />
        </div>

    )
}
