import React from "react";
import { Animated, ImageSourcePropType } from "react-native";
interface IProps {
    item: (string | ImageSourcePropType)[];
    pageRef: React.Ref<any>;
    scrollOffsetAnimatedValue: Animated.Value;
    positionAnimatedValue: Animated.Value;
    currentPosition: (value: number) => void;
    initialPage: number;
    allBorder: boolean;
    onMomentScroll?: (value?: boolean) => void;
    leftBorderOnly: boolean;
    borderRadius: number;
    gestureEnable: boolean;
    noBorder: boolean;
}
declare const ViewPager: ({ item, pageRef, scrollOffsetAnimatedValue, positionAnimatedValue, currentPosition, initialPage, allBorder, onMomentScroll, borderRadius, gestureEnable, noBorder, }: IProps) => React.JSX.Element;
export default ViewPager;
