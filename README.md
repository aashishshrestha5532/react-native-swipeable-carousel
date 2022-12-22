# React Native Swipeable Carousel

[![npm version](https://img.shields.io/badge/npm%20package-v1.0.2-blue.svg)](https://www.npmjs.com/package/react-native-swipeable-carousel)

## Preview

![preview](screenshot.png)

## Get started

### Installation

Run: `npm install react-native-swipeable-carousel` OR
`yarn add react-native-swipeable-carousel`

### Usage

```javascript
import Carousel from 'react-native-swipeable-carousel';

// imagePath can get images URL or imported images.

const data = [
    "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/12/09/16/42/snow-man-3008179_1280.jpg"
];

<Carousel
  data={data}
/>
```

### Properties
| Prop | Description | Default | Required
|---|---|---|---|
|**`data`**|An array of images (urls). Read bellow about **Data array structure**. |*None*|Yes|
|**`height`**|Carousel height.|`200`|No|
|**`width`**|Carousel width.|`400`|No|
|**`onPress`**|A function called when an item is pressed|*None*|No|



## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
