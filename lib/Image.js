import { StyleSheet, View, Image } from "react-native";
import React from "react";
const Color = {
    borderColor: "#C0C0C0",
};
const AbstractAvatar = ({ imageSource, allBorder, leftBordersOnly, borderRadius, noBorder, bgColor, }) => {
    const defaultBorderRad = noBorder ? 0 : borderRadius ? borderRadius : 15;
    const myBorders = {
        borderTopLeftRadius: defaultBorderRad,
        borderTopRightRadius: leftBordersOnly ? 0 : defaultBorderRad,
        borderBottomLeftRadius: allBorder || leftBordersOnly ? defaultBorderRad : 0,
        borderRadius: allBorder ? defaultBorderRad : 0,
    };
    return (<View style={[styles.mainContainer]}>
      <View style={Object.assign({}, StyleSheet.absoluteFillObject)}>
        <View style={[
            styles.layerOne,
            Object.assign(Object.assign({}, myBorders), { backgroundColor: bgColor ? bgColor : Color.borderColor }),
        ]}>
          <View style={[
            {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            Object.assign({}, myBorders),
        ]}>
            <Image source={typeof imageSource === "string"
            ? { uri: imageSource }
            : imageSource} style={[{ width: "100%", height: "100%" }, Object.assign({}, myBorders)]}/>
          </View>
        </View>
      </View>
    </View>);
};
export default React.memo(AbstractAvatar);
const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
    },
    layerOne: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    layerTwo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
