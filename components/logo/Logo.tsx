import { FC } from 'react';
import * as LogoComponents from '@/components/logo/dynamic';

type LogoOptionKeys = keyof typeof LogoComponents;

const logoOption: LogoOptionKeys = require("@/config").blogConfig.header_logo.option;
const SelectedLogo = LogoComponents[logoOption];

export type LogoProps = {
    logoHover: boolean;
}

const Logo: FC<LogoProps> = ({ logoHover }) => {
    return <SelectedLogo logoHover={logoHover} />;
};

export default Logo;
