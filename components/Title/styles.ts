import styled from "styled-components";

export const HeadingText = styled.h1`
  font-size: 60px;
  color: #fff;
  font-weight: 400;

  a {
    color: #fff;
  }

  @media screen and (max-width: 1080px) {
    font-size: 40px;
    text-align: center;
    padding: 0px 40px;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
