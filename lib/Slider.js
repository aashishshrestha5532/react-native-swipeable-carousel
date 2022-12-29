import React, { useRef, useState } from "react";
import { StyleSheet, View, Animated, TouchableOpacity } from "react-native";
import ViewPager from "./ViewPager";
import StepIndicator from "./StepIndicator";
import ImageArrowLeftSvg from "./imageArrowLeftSvg";
import ImageArrowRightSvg from "./imageArrowRightSvg";
import { moderateScale } from "react-native-size-matters";
const Slider = ({ indicatorStyleTwoHeight, item, allBorder, height, indicatorStyleTwo, onMomentScroll, gestureEnable, noBorder, }) => {
    const pageRef = useRef(null);
    const [initialPage, setInitialPage] = useState(0);
    const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
    const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
    const defaultIndicatorStyleTwoHeight = indicatorStyleTwoHeight
        ? indicatorStyleTwoHeight
        : 10;
    const currentPosition = (pageNumber) => {
        setInitialPage(pageNumber);
    };
    const goToNext = (myPage) => {
        pageRef.current.setPage(myPage);
    };
    const backToPrevious = (myPage) => {
        pageRef.current.setPage(myPage);
    };
    return (<React.Fragment>
      <ViewPager initialPage={initialPage} item={item} pageRef={pageRef} scrollOffsetAnimatedValue={scrollOffsetAnimatedValue} positionAnimatedValue={positionAnimatedValue} currentPosition={currentPosition} allBorder={allBorder} noBorder={noBorder} gestureEnable={gestureEnable} onMomentScroll={onMomentScroll} leftBorderOnly={false} borderRadius={0}/>
      {initialPage != 0 ? (<View style={styles.viewLeft}>
          <TouchableOpacity onPress={() => backToPrevious(initialPage - 1)}>
            <ImageArrowLeftSvg />
          </TouchableOpacity>
        </View>) : (false)}

      {initialPage == (item === null || item === void 0 ? void 0 : item.length) - 1 ? (false) : (<View style={styles.viewRight}>
          <TouchableOpacity onPress={() => goToNext(initialPage + 1)}>
            <ImageArrowRightSvg />
          </TouchableOpacity>
        </View>)}

      <View style={[
            styles.viewFour,
            {
                bottom: indicatorStyleTwo ? defaultIndicatorStyleTwoHeight : -15,
            },
        ]}>
        {(item === null || item === void 0 ? void 0 : item.length) > 1 &&
            (item === null || item === void 0 ? void 0 : item.map((item, index) => {
                return (<React.Fragment key={index}>
                <StepIndicator index={index} animatedValue={Animated.add(scrollOffsetAnimatedValue, positionAnimatedValue)} indicatorStyleTwo={indicatorStyleTwo}/>
              </React.Fragment>);
            }))}
      </View>
    </React.Fragment>);
};
export default Slider;
const styles = StyleSheet.create({
    viewTwo: {
        width: "100%",
        height: 180,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
    },
    viewThree: {
        width: "85%",
        height: 100,
        alignSelf: "center",
        marginBottom: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewFour: {
        flexDirection: "row",
        position: "absolute",
        alignSelf: "center",
    },
    viewLeft: {
        width: 40,
        height: "100%",
        position: "absolute",
        zIndex: 999,
        left: 0,
        justifyContent: "center",
        paddingLeft: 5,
    },
    viewRight: {
        width: 40,
        height: "100%",
        alignSelf: "center",
        position: "absolute",
        zIndex: 999,
        right: 0,
        justifyContent: "center",
        paddingLeft: 20,
    },
    viewFive: {
        width: moderateScale(147, 0.1),
        height: moderateScale(23, 0.1),
        backgroundColor: "rgba(0, 0, 0, 0.57)",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    textFour: {
        fontFamily: "bold",
        color: "#ffffff",
        fontSize: moderateScale(10, 0.1),
    },
});
