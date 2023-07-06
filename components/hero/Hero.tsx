import { FC } from "react";
import * as HeroComponents from "@/components/hero/dynamic";

type HeroOptionKeys = keyof typeof HeroComponents;

const heroOption: HeroOptionKeys = require("@/config").blogConfig.hero.option;
const SelectedHero = HeroComponents[heroOption];

const Hero: FC = () => {
    return <SelectedHero />;
};

export default Hero;
