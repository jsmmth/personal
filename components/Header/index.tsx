import React from "react";
import { StyledHeader, HeaderText } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderText>
        <span className="bold">Joseph Smith</span>{" "}
        <a href="https://twitter.com/_jsmth">@_jsmth</a>
      </HeaderText>
      <HeaderText>
        Building the <a href="https://jour.com">most-loved journal</a>
      </HeaderText>
      <HeaderText top={32}>
        <img src="/images/live-icon.svg" />
        <a href="https://youtu.be/ON_0tqGTNyE">What me code</a> my site live
      </HeaderText>
    </StyledHeader>
  );
};

export default Header;
