import Image from 'next/image';

export default function BackgroundImage() {
    return (
        <Image
            src="https://www.loliapi.com/acg/pc"
            alt="bg"
            className="-z-50 fixed"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority={true}
            unoptimized={true}
        />
    );
}
