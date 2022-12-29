import React from "react";
import { Animated, StyleSheet, View } from "react-native";
const OnBoardingIndicators = ({ index, animatedValue, indicatorStyleTwo, }) => {
    const indicatorOpacity = animatedValue.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.33, 1.2, 0.33],
        extrapolate: "clamp",
    });
    return (<View>
      <Animated.View style={[
            styles.dotOne,
            {
                opacity: indicatorOpacity,
                backgroundColor: indicatorStyleTwo ? "#F7F9FF" : "##000000",
            },
        ]}/>
    </View>);
};
export default OnBoardingIndicators;
const styles = StyleSheet.create({
    dotOne: {
        width: 5,
        height: 5,
        backgroundColor: "#F7F9FF",
        borderRadius: 5,
        marginHorizontal: 0,
        marginLeft: 7,
    },
});
