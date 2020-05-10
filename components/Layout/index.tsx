import React, { ReactNode } from "react";
import GlobalStyles from "../../common/styles";
import { Background, Container } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Container>{React.Children.toArray(children)}</Container>
      </Background>
    </>
  );
};

export default Layout;
