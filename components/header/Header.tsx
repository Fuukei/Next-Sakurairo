import { FC } from "react";
import * as HeaderComponents from "@/components/header/dynamic";

type HeaderOptionKeys = keyof typeof HeaderComponents;

const headerOption: HeaderOptionKeys = require("@/config").blogConfig.header.option;
const SelectedHeader = HeaderComponents[headerOption];

const Header: FC = () => {
    return <SelectedHeader />;
};

export default Header;
