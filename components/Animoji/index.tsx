import React, { MouseEvent, useRef, useContext } from "react";
import { AnimojiContainer, Laptop, StyledSticker } from "./styles";
import { StateContext, STARTING_TEXT } from "common/store";
import { updateText } from "common/actions";

type Sticker = {
  imageUrl: string[];
  position: { x: number; y: number };
  cursorText: string;
  url: string;
};

const Animoji: React.FC = () => {
  const { dispatch } = useContext(StateContext);
  const animojiRef = useRef<HTMLImageElement | null>(null);

  const laptopStickers: Sticker[] = [
    {
      imageUrl: ["images/github.png", "images/github@2x.png"],
      position: { x: 24, y: 24 },
      cursorText: "Click to visit my GitHub",
      url: "https://github.com/JosephSmith127",
    },
    {
      imageUrl: ["images/jour.png", "images/jour@2x.png"],
      position: { x: 235, y: 37 },
      cursorText: "Click to start journaling",
      url: "https://jour.com",
    },
  ];

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;
    if (animojiRef.current) {
      const {
        left: clientX,
        top: clientY,
      } = animojiRef.current.getBoundingClientRect();
      const x = pageX - clientX;
      const y = pageY - clientY;
      if (x >= 120 && x <= 170 && y >= 120 && y <= 155) {
        dispatch(updateText("Ouch!"));
      } else if (y >= 146 && y <= 166 && x >= 219 && x <= 235) {
        dispatch(updateText("Yes, that's my ear lol"));
      } else {
        dispatch(updateText(STARTING_TEXT));
      }
    }
  };

  const onStickerOver = (cursorText: string) => {
    dispatch(updateText(cursorText));
  };

  const onStickerOut = () => {
    dispatch(updateText(STARTING_TEXT));
  };

  return (
    <AnimojiContainer onMouseMove={onMouseMove}>
      <img ref={animojiRef} src="images/animoji.png" width="244" height="249" />
      <Laptop>
        {laptopStickers.map((sticker) => (
          <a href={sticker.url} title={sticker.cursorText}>
            <StyledSticker
              onMouseEnter={() => onStickerOver(sticker.cursorText)}
              onMouseLeave={onStickerOut}
              x={sticker.position.x}
              y={sticker.position.y}
              src={sticker.imageUrl[0]}
              srcSet={`${sticker.imageUrl[0]} 1x, ${sticker.imageUrl[1]} 2x`}
            />
          </a>
        ))}
      </Laptop>
    </AnimojiContainer>
  );
};

export default Animoji;
