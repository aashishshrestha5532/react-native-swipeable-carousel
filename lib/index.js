import { View } from "react-native";
import React from "react";
import Slider from "./Slider";
import { moderateScale } from "react-native-size-matters";
export default function index({ height, images, enableGestureSwipe = false }) {
  const carouselHeight = !!height ? height : 170;
  return (
    <View style={{ width: "100%", height: moderateScale(carouselHeight, 0.1) }}>
      <Slider
        item={images}
        height={moderateScale(100, 0.1)}
        gestureEnable={enableGestureSwipe}
        indicatorStyleTwoHeight={0}
        indicatorStyleTwo={true}
      />
    </View>
  );
}
