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
  API_BASE_URL: "",
  API_BASE_URL_LOCAL: "",
  REQUEST_TIMEOUT: 20000 * 1,
  animation_from_right: "slide_from_right",
  animation_from_left: "slide_from_left",
  animation_from_bottom: "slide_from_bottom",
  animation_default: "default",
  animation_none: "none",
  animation_fade: "fade",
  animation_flip: "flip",
  dateFormate: "MMMM Do YYYY"
};

const Colors = {
  green: "#39b18d",
  pink: "#ff4081",
  white: "#FFFFFF",
  black: "#000",
  red: "#dc3545",
  errorColor: "#B52222",
  yellow: "rgba(239, 192, 48, 0.8)",
  lightBlack: "rgba(0, 0, 0, 0.7)",
  btnColor: "#EFC030",
  gray: "gray",
  tabGray: "#999999",
  shadowColor: "#F3F6F6",
  audioDetailBorder: "rgba(0, 0, 0, 0.2)",
  alertbackgrouend: "rgba(0, 0, 0, 0.5)",
  lightWhite: "rgba(255, 255, 255, 0.5)"
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

const Fonts = {
  OpenBold: "OpenSans-Bold",
  OpenLight: "OpenSans-Light",
  OpenMedium: "OpenSans-Medium",
  OpenRegular: "OpenSans-Regular",
  OpenSemiBold: "OpenSans-SemiBold"
};

const ImageView = {
  logo: require("../assets/logo.png"),
  bg: require("../assets/bg.png"),
  home: require("../assets/home.png"),
  back: require("../assets/back.png"),
  media: require("../assets/media.png"),
  profile: require("../assets/profile.png"),
  programm: require("../assets/programm.png"),
  homeActive: require("../assets/homeActive.png"),
  mediaActive: require("../assets/mediaActive.png"),
  profileActive: require("../assets/profileActive.png"),
  programmActive: require("../assets/programmActive.png"),
  AbroadLogo: require("../assets/abroad-Logo.png"),
  appLogo: require("../assets/appLogo.png"),
  pwdv: require("../assets/pwdv.png"),
  setting: require("../assets/setting.png"),
  eye: require("../assets/eye.png"),
  backBlack: require("../assets/backBlack.png"),
  download: require("../assets/download.png"),
  download1: require("../assets/downloadA.png"),
  like: require("../assets/like.png"),
  unLike: require("../assets/unLike.png"),
  completed: require("../assets/completed.png"),
  play: require("../assets/play.png"),
  nots: require("../assets/nots.png"),
  info: require("../assets/info.png"),
  audioplay: require("../assets/audioplay.png"),
  push: require("../assets/push.png"),
  next: require("../assets/next.png"),
  privious: require("../assets/privious.png"),
  next15: require("../assets/15next.png"),
  privious15: require("../assets/15privious.png"),
  playBlack: require("../assets/playBlack.png"),
  opennots: require("../assets/openJurnal.png"),
  changeJurnal: require("../assets/changeJurnal.png"),
  activeinfo: require("../assets/openDiscription.png"),
  playSmall: require("../assets/playSmall.png"),
  sessionActive: require("../assets/sessionActive.png"),
  session: require("../assets/session.png"),
  righteBack: require("../assets/righteBack.png")
};

const Strings = {
  app_Name: "COCO",
  loading: "Loading...",
  home: "HOME"
};

export { Constants, Colors, Dimens, Screen, Fonts, ImageView, Strings };
