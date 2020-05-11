import styled from "styled-components";

export const AnimojiContainer = styled.div`
  position: relative;
`;

export const Laptop = styled.div`
  height: 90px;
  width: 351px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 40px);
  background: url("images/laptop.svg") center bottom no-repeat;
  animation: slideUp 0.3s ease-in-out 2s forwards;

  @keyframes slideUp {
    0% {
      transform: translate(-50%, 40px);
    }
    100% {
      transform: translate(-50%, 0px);
    }
  }
`;

export const StyledSticker = styled.img<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;
