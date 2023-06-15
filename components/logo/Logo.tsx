import TextLogo from '@/components/logo/TextLogo';
import ImageLogo from '@/components/logo/ImageLogo';

const logoComponents = {
    TextLogo: TextLogo,
    ImageLogo: ImageLogo
};

type LogoOptionKeys = keyof typeof logoComponents;

const logoOption: LogoOptionKeys = require("@/config").blogConfig.header_logo.option;
const SelectedLogo = logoComponents[logoOption];

export default function Logo({logoHover}: {logoHover: boolean}) {
    return (
        <SelectedLogo logoHover={logoHover}/>
    )
}
