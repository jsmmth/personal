import React, { ReactNode } from "react";
import GlobalStyles from "../../common/styles";
import { Container } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>{React.Children.toArray(children)}</Container>
    </>
  );
};

export default Layout;
