import React from "react";
import type { ImageSourcePropType } from "react-native";
interface IProps {
    indicatorStyleTwoHeight: number;
    item: (string | ImageSourcePropType)[];
    allBorder?: boolean;
    height: number;
    indicatorStyleTwo?: boolean;
    onMomentScroll?: (isScrolling?: boolean) => void;
    gestureEnable: boolean;
    noBorder?: boolean;
}
declare const Slider: ({ indicatorStyleTwoHeight, item, allBorder, height, indicatorStyleTwo, onMomentScroll, gestureEnable, noBorder, }: IProps) => React.JSX.Element;
export default Slider;
