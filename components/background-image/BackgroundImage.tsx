import { FC } from "react";
import * as BackgroundImageComponents from "@/components/background-image/dynamic";

type BackgroundImageOptionKeys = keyof typeof BackgroundImageComponents;

const backgroundImageOption: BackgroundImageOptionKeys = require("@/config").blogConfig.background_image.option;
const SelectedBackgroundImage = BackgroundImageComponents[backgroundImageOption];

const BackgroundImage: FC = () => {
    return <SelectedBackgroundImage />;
};

export default BackgroundImage;
