import { Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
} from "react-native-responsive-screen";

const Constants = {
  animation_from_right: "slide_from_right",
  animation_from_left: "slide_from_left",
  animation_from_bottom: "slide_from_bottom",
  animation_default: "default",
  animation_none: "none",
  animation_fade: "fade",
  animation_flip: "flip"
};

const Colors = {
  green: "#39b18d",
  pink: "#ff4081",
  white: "#FFFFFF",
  black: "#000",
  red: "#dc3545",
  errorColor: "#B52222",
  yellow: "rgba(239, 192, 48, 0.8)",
  btnColor: "#EFC030",
  gray: "gray",
  tabGray: "#999999",
  shadowColor: "#F3F6F6",
  cardLight: "rgba(0, 0, 0, 0.2)",
  alertbackgrouend: "rgba(0, 0, 0, 0.5)",
  searchbarBg: "#F1F2F4"
};

const Dimens = {
  F7: RFPercentage(0.8),
  F9: RFPercentage(1.1),
  F10: RFPercentage(1.2),
  F12: RFPercentage(1.4),
  F13: RFPercentage(1.55),
  F14: RFPercentage(1.7),
  F16: RFPercentage(1.9),
  F18: RFPercentage(2.2),
  F20: RFPercentage(2.4),
  F22: RFPercentage(2.6),
  F24: RFPercentage(2.9),
  F26: RFPercentage(3.1),
  F28: RFPercentage(3.4),
  F30: RFPercentage(3.6),
  F40: RFPercentage(4.8)
};

const Screen = {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
  wp: widthPercentageToDP,
  hp: heightPercentageToDP,
  scale: Dimensions.get("window").scale,
  fontScale: Dimensions.get("window").fontScale,
  OrientationChange: listenOrientationChange,
  OrientationListener: removeOrientationListener
};

const Images = {
  close: require("../assets/close.png"),
  check: require("../assets/check.png"),
  filter: require("../assets/filter.png"),
  search: require("../assets/search.png")
};

const Fonts = {};

const ImageView = {};

const Strings = {
  app_Name: "COCO",
  loading: "Loading...",
  home: "HOME"
};

const emptyArray = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

export {
  Constants,
  Colors,
  Dimens,
  Screen,
  Fonts,
  ImageView,
  Strings,
  Images,
  emptyArray
};
