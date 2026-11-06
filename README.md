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

      yarn add react-native-size-matters react-native-svg
      yarn add react-native-pager-view@^9   # pick the version for your app from the table below

See [Which react-native-pager-view version to install](#which-react-native-pager-view-version-to-install).

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
| 2.x                             | >= 18  | >= 0.72      | 6.x, 7.x, 8.x or 9.x (see below)             |
| 1.x                             | 18     | 0.70         | 6.x                                          |

### Which react-native-pager-view version to install

| Your app                                               | Install                         |
| ------------------------------------------------------ | ------------------------------- |
| New Architecture, React Native 0.86 or newer           | `react-native-pager-view@^9`    |
| New Architecture, React Native older than 0.86         | `react-native-pager-view@^8`    |
| Old architecture (New Architecture turned off)         | `react-native-pager-view@^6`    |

- `react-native-pager-view` 7 and later only support the New Architecture (the default since React Native 0.76).
- `react-native-pager-view` 9 supports only React Native 0.86, 0.87 and 0.88.
- `react-native-pager-view` 10 is not supported yet.

## Migrating from 1.x to 2.x

1. Update the package and its peer dependencies. Use the `react-native-pager-view` version from the table above (`^9` here):

       yarn add react-native-swipeable-carousel@^2 react-native-svg react-native-size-matters
       yarn add react-native-pager-view@^9

2. On iOS, reinstall pods: `cd ios && pod install`.
3. Rebuild the native app (a Metro reload is not enough after changing native dependencies).

The component API (`images`, `height`, `enableGestureSwipe`) did not change. If you only use `import Carousel from "react-native-swipeable-carousel"`, you don't need to change your code.

If you imported files from inside `lib/` directly (for example `react-native-swipeable-carousel/lib/Slider`), those paths changed in 2.0. They were never part of the public API, so switch to the default import.

Other changes in 2.0:

- Works with React 19 and current React Native. The image layer used `StyleSheet.absoluteFillObject`, which was removed from React Native; on current versions that style was silently empty, so images lost their full-size layout. It now uses an explicit style.
- `images` is typed as `(string | ImageSourcePropType)[]`, so local images from `require(...)` typecheck.
- `height` is now optional in the TypeScript types.

## Peer dependencies

1. react-native-pager-view
2. react-native-size-matters
3. react-native-svg

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
