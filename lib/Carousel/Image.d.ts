import { ImageSourcePropType } from "react-native";
import React from "react";
interface IProps {
    imageSource: string | ImageSourcePropType;
    allBorder: boolean;
    leftBordersOnly: boolean;
    borderRadius: number;
    noBorder: boolean;
    bgColor: string;
}
declare const _default: React.MemoExoticComponent<({ imageSource, allBorder, leftBordersOnly, borderRadius, noBorder, bgColor, }: IProps) => React.JSX.Element>;
export default _default;
