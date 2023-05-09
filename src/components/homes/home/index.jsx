import React, { useEffect } from "react";
import { FooterThree, HeaderSix, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import AboutArea from "./about-area";
import HeroArea from "./hero-area";
import Industries from "./industries";
import ServicesArea from "./services-area";

const HomeSix = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderSix />
      <HeroArea />
      <ServicesArea />
      <Industries />
      <AboutArea />
      <FooterThree />
    </Wrapper>
  );
};

export default HomeSix;
