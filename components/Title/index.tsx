import React, { ReactNode } from "react";
import { HeadingText } from "./styles";

type TitleProps = {
  children: ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => (
  <HeadingText>{children}</HeadingText>
);

export default Title;
