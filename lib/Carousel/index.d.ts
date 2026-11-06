import { ImageSourcePropType } from "react-native";
import React from "react";
interface IProps {
    height?: number;
    images: (string | ImageSourcePropType)[];
    enableGestureSwipe?: boolean;
}
export default function index({ height, images, enableGestureSwipe, }: IProps): React.JSX.Element;
export {};
