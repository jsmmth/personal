import React, { useEffect, useRef, useContext } from "react";
import { StyledBox } from "./styles";
import { StateContext } from "common/store";

const CursorBox: React.FC = () => {
  const { state } = useContext(StateContext);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (boxRef.current) {
      boxRef.current.setAttribute(
        "style",
        `transform: translate3d(${pageX + 20}px, ${
          pageY + 20
        }px, 0); opacity: 1;`
      );
    }
  };

  const onMouseOut = () => {
    if (boxRef.current) {
      boxRef.current.setAttribute("style", `opacity: 0;`);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <StyledBox ref={boxRef}>{state.text}</StyledBox>;
};

export default CursorBox;
