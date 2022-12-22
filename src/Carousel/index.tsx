import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Slider from './Slider';
import {moderateScale} from 'react-native-size-matters';

interface IProps {
  height: number;
  images: string[];
}

export default function index({height, images}: IProps) {
  const carouselHeight = !!height ? height : 170;

  return (
    <View style={{width: '100%', height: moderateScale(carouselHeight, 0.1)}}>
      <Slider
        item={images}
        height={moderateScale(100, 0.1)}
        gestureDisable={false}
        indicatorStyleTwo={true}
      />
    </View>
  );
}
