import React, { ReactNode } from "react";
import Typist from "react-typist";
import { HeadingText, TitleContainer } from "./styles";

const Title: React.FC = () => (
  <TitleContainer>
    <HeadingText>
      <Typist avgTypingDelay={100} startDelay={1000}>
        <span>I build scalable servers in Node</span>
        <Typist.Backspace count={24} delay={2000} />
        <span>high performant apps with React Native</span>
        <Typist.Backspace count={38} delay={2000} />
        <span>beautiful web products in React</span>
      </Typist>
    </HeadingText>
  </TitleContainer>
);

export default Title;
