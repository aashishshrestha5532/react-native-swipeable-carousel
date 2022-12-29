# React Native Swipeable Carousel


[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/aashishshrestha5532/react-native-swipeable-carousel/issues)
[![npm version](https://badge.fury.io/js/react-native-swipeable-carousel.svg)](https://badge.fury.io/js/react-native-swipeable-carousel)
[![npm downloads](https://img.shields.io/npm/dt/react-native-swipeable-carousel.svg)](https://badge.fury.io/js/react-native-swipeable-carousel)

A simple swipeable carousel created on the top of react-native-pager-view


## Preview

![demo gif](https://s3.gifyu.com/images/Screen-Recording-2022-12-28-at-18.55.54.gif)

## Get started


### Pre-requisites

Since this package is created on the top of react native pager view and other libraries. So first you need to install them.

      yarn add react-native-size-matters react-native-pager-view react-native-svg

### Installation

      yarn add react-native-swipeable-carousel

### Usage

```javascript
import Carousel from 'react-native-swipeable-carousel';

// imagePath can get images URL or imported images.

const data = [
    "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/12/09/16/42/snow-man-3008179_1280.jpg"
];

<Carousel
  images={data}
  enableGestureSwipe={true}
/>
```

### Properties
| Prop | Description | Default | Required
|---|---|---|---|
|**`images`**|An array of images (urls or local). |*None*|Yes|
|**`height`**|Carousel height.|`200`|No|
|**`width`**|Carousel width.|`400`|No|
|**`enableGestureSwipe`**|Enable gesture swipe(left/right).|`false`|No|



## Peer dependencies
1. react-native-pager-view
2. react-native-size-matters
3. react-native-svg

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
