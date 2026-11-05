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
import Carousel from "react-native-swipeable-carousel";

// imagePath can get images URL or imported images (local).

const data = [
  "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/12/09/16/42/snow-man-3008179_1280.jpg",
];

<Carousel images={data} enableGestureSwipe={true} />;
```

### Properties

| Prop                     | Description                                                 | Default | Required |
| ------------------------ | ----------------------------------------------------------- | ------- | -------- |
| **`images`**             | An array of images (URL strings or `require(...)` sources). | _None_  | Yes      |
| **`height`**             | Carousel height (scaled with `moderateScale`).              | `170`   | No       |
| **`enableGestureSwipe`** | Enable gesture swipe (left/right).                          | `false` | No       |

The carousel always fills the width of its parent, so set the width on a wrapping `View`.

## Compatibility

| react-native-swipeable-carousel | React  | React Native | react-native-pager-view                      |
| ------------------------------- | ------ | ------------ | -------------------------------------------- |
| 2.x                             | >= 18  | >= 0.72      | 6.x (old architecture) or 7.x+ (New Architecture) |
| 1.x                             | 18     | 0.70         | 6.x                                          |

`react-native-pager-view` 7 and later only support the New Architecture (the default since React Native 0.76). On the old architecture, stay on `react-native-pager-view@6`.

## Migrating from 1.x to 2.x

1. Update the package and its peer dependencies:

       yarn add react-native-swipeable-carousel@^2 react-native-pager-view react-native-svg react-native-size-matters

2. On iOS, reinstall pods: `cd ios && pod install`.
3. Rebuild the native app (a Metro reload is not enough after changing native dependencies).

The component API (`images`, `height`, `enableGestureSwipe`) did not change. Other changes in 2.0:

- Works with React 19 and current React Native (`StyleSheet.absoluteFillObject`, removed from React Native, is no longer used).
- `images` is typed as `(string | ImageSourcePropType)[]`, so local images from `require(...)` typecheck.
- `height` is now optional in the TypeScript types.
- Inactive dot colour fixed (was the invalid value `##000000`).

## Peer dependencies

1. react-native-pager-view
2. react-native-size-matters
3. react-native-svg

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
