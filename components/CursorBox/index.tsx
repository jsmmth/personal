import React, { useEffect, useRef } from "react";
import { StyledBox } from "./styles";

const CursorBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (boxRef.current) {
      boxRef.current.setAttribute(
        "style",
        `transform: translate3d(${pageX + 10}px, ${pageY + 10}px, 0);`
      );
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <StyledBox ref={boxRef}>Helllooo!!</StyledBox>;
};

export default CursorBox;
