import React from "react";
import { Animated } from "react-native";
interface IProps {
    index: number;
    animatedValue: ReturnType<typeof Animated.add>;
    indicatorStyleTwo?: boolean;
}
declare const OnBoardingIndicators: ({ index, animatedValue, indicatorStyleTwo, }: IProps) => React.JSX.Element;
export default OnBoardingIndicators;
