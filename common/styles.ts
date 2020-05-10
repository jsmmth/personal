import { createGlobalStyle } from "styled-components";

function fontFace(
  name: string,
  src: string,
  fontWeight: string | number = "normal",
  fontStyle: string = "normal"
) {
  return `
    @font-face{
      font-family: "${name}";
      src: url('/fonts/${src}.woff') format("woff");
      src: url('/fonts/${src}.woff') format("woff"),
        url('/fonts/${src}.ttf') format("truetype"),
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}

export default createGlobalStyle`
  ${fontFace("cerebri-sans", "cerebri-sans/CerebriSans-Medium", 500)}
  ${fontFace("cerebri-sans", "cerebri-sans/CerebriSans-Regular", 400)}

  html, body {
    margin: 0px;
    font-family: 'cerebri-sans', --apple-system, Roboto, 'Helvetica Neue', sans-serif;
    cursor: url("images/cursor.svg") 0 0, auto;
    cursor: url("images/cursor.png") 0 0, pointer;
    cursor: url("images/cursor.svg") 0 0, pointer;
    cursor: -webkit-image-set(url("images/cursor.png") 1x, url("images/cursor@2x.png") 2x) 0 0, pointer; /* Webkit */
  }
`;
