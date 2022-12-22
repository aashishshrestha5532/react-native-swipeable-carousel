import React from "react";
import { SvgXml } from "react-native-svg";

const ImageArrowLeftSvg = ({ height, width, color, size }) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : "white";
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={`<svg width="13" height="35" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 1L1 21L21 41" stroke="${defaultColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
       `}
    />
  );
};

export default ImageArrowLeftSvg;
