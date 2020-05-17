import React, { MouseEvent, useRef, useContext } from "react";
import { AnimojiContainer, Laptop, StyledSticker } from "./styles";
import { StateContext, STARTING_TEXT } from "common/store";
import { updateText } from "common/actions";

type Sticker = {
  imageUrl: string[];
  position: { x: number; y: number };
  url: string;
};

enum CursorText {
  eye = "Ouch!",
  ear = "Yes, that's my ear lol",
  github = "Click to visit my GitHub",
  jour = "Click to start journaling",
}

const Animoji: React.FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const animojiRef = useRef<HTMLImageElement | null>(null);

  const laptopStickers: Sticker[] = [
    {
      imageUrl: ["images/github.png", "images/github@2x.png"],
      position: { x: 24, y: 24 },
      url: "https://github.com/JosephSmith127",
    },
    {
      imageUrl: ["images/jour.png", "images/jour@2x.png"],
      position: { x: 235, y: 37 },
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

      const inEye = x >= 120 && x <= 170 && y >= 120 && y <= 155;
      const inEar = y >= 146 && y <= 166 && x >= 219 && x <= 235;
      const inGithubSticker = y >= 196 && y <= 244 && x >= -17 && x <= 29;
      const inJourSticker = y >= 209 && y <= 252 && x >= 100 && x <= 240;

      if (inEye && state.text !== CursorText.eye) {
        dispatch(updateText(CursorText.eye));
      } else if (inEar && state.text !== CursorText.ear) {
        dispatch(updateText(CursorText.ear));
      } else if (inGithubSticker && state.text !== CursorText.github) {
        dispatch(updateText(CursorText.github));
      } else if (inJourSticker && state.text !== CursorText.jour) {
        dispatch(updateText(CursorText.jour));
      } else if (
        !inEar &&
        !inEye &&
        !inGithubSticker &&
        !inJourSticker &&
        state.text !== STARTING_TEXT
      ) {
        dispatch(updateText(STARTING_TEXT));
      }
    }
  };

  return (
    <AnimojiContainer onMouseMove={onMouseMove}>
      <img ref={animojiRef} src="images/animoji.png" width="244" height="249" />
      <Laptop>
        {laptopStickers.map((sticker) => (
          <a href={sticker.url}>
            <StyledSticker
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
