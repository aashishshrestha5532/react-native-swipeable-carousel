import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Color = {
  borderColor: "#C0C0C0",
};

interface IProps {
  imageSource: string;
  allBorder: boolean;
  leftBordersOnly: boolean;
  borderRadius: number;
  noBorder: boolean;
  bgColor: string;
}

const AbstractAvatar = ({
  imageSource,
  allBorder,
  leftBordersOnly,
  borderRadius,
  noBorder,
  bgColor,
}: IProps) => {
  const defaultBorderRad = noBorder ? 0 : borderRadius ? borderRadius : 15;

  const myBorders = {
    borderTopLeftRadius: defaultBorderRad,
    borderTopRightRadius: leftBordersOnly ? 0 : defaultBorderRad,
    borderBottomLeftRadius: allBorder || leftBordersOnly ? defaultBorderRad : 0,
    borderRadius: allBorder ? defaultBorderRad : 0,
  };
  return (
    <View style={[styles.mainContainer]}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <View
          style={[
            styles.layerOne,
            {
              ...myBorders,
              backgroundColor: bgColor ? bgColor : Color.borderColor,
            },
          ]}
        >
          <View
            style={[
              {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              },
              { ...myBorders },
            ]}
          >
            <Image
              uri={imageSource}
              style={[{ width: "100%", height: "100%" }, { ...myBorders }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
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
