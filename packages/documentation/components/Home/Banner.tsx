import React, { FunctionComponent } from "react";
import { Text } from "@react-md/typography";
import Logo from "./Logo";

const Banner: FunctionComponent = () => (
  <div className="home__banner">
    <Text type="headline-2" className="home__title">
      react-md
    </Text>
    <Logo className="home__logo" />
  </div>
);

export default Banner;
