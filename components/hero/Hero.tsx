import { FC } from "react";
import * as HeroComponents from "@/components/hero/dynamic";

type LogoOptionKeys = keyof typeof HeroComponents;

const heroOption: LogoOptionKeys = require("@/config").blogConfig.hero.option;
const SelectedHero = HeroComponents[heroOption];

const Hero: FC = () => {
    return <SelectedHero />;
};

export default Hero;
