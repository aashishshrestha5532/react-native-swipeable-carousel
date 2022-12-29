import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import PagerView from "react-native-pager-view";
import { moderateScale } from "react-native-size-matters";
import AbstractAvatar from "./Image";
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const ViewPager = ({ item, pageRef, scrollOffsetAnimatedValue, positionAnimatedValue, currentPosition, initialPage, allBorder, onMomentScroll, borderRadius, gestureEnable, noBorder, }) => {
    const defaultBorderRad = borderRadius ? borderRadius : 15;
    const handleDragState = ({ nativeEvent }) => {
        if (onMomentScroll) {
            if (nativeEvent.pageScrollState === "dragging") {
                onMomentScroll(true);
            }
            if (nativeEvent.pageScrollState === "idle" ||
                nativeEvent.pageScrollState === "settling") {
                onMomentScroll(false);
            }
        }
    };
    return (<AnimatedPagerView key="1" style={{
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
        }} onPageSelected={(e) => {
            currentPosition(e.nativeEvent.position);
        }} onPageScrollStateChanged={handleDragState} scrollEnabled={gestureEnable ? true : false} initialPage={initialPage ? initialPage : 0} ref={pageRef} onPageScroll={Animated.event([
            {
                nativeEvent: {
                    offset: scrollOffsetAnimatedValue,
                    position: positionAnimatedValue,
                },
            },
        ], {
            listener: ({ nativeEvent: { offset, position } }) => { },
            useNativeDriver: true,
        })} onMoveShouldSetResponderCapture={() => true}>
      {item === null || item === void 0 ? void 0 : item.map((singleItem, index) => (<View key={index} style={{
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
          <View style={[styles.imageContainer]}>
            <AbstractAvatar noBorder={true} allBorder={allBorder} imageSource={singleItem} leftBordersOnly={false} borderRadius={0} bgColor={""}/>
          </View>
        </View>))}
    </AnimatedPagerView>);
};
export default ViewPager;
const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: "relative",
    },
    textContainer: {
        width: "80%",
        height: 100,
        alignItems: "center",
    },
    viewTwo: {
        width: moderateScale(147, 0.1),
        height: moderateScale(23, 0.1),
        backgroundColor: "rgba(0, 0, 0, 0.57)",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    textFour: {
        fontFamily: "bold",
        color: "rgba(63, 71, 82, 0.5)",
        fontSize: moderateScale(10, 0.1),
    },
});
