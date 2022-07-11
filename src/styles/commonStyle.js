import { StyleSheet } from "react-native";
import { Fonts, Dimens, Colors } from "../config/appConstants";
const commonStyle = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  centerFlex: {
    flex: 1
  },
  centerView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  flexColumn: {
    alignItems: "center",
    flexDirection: "column"
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  flexRowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flexRowCenter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  textBold: {
    color: Colors.black,
    fontFamily: Fonts.MonstBold,
    fontSize: Dimens.F14
  },
  textMedium: {
    color: Colors.black,
    fontFamily: Fonts.OpenMedium,
    fontSize: Dimens.F12
  },
  textNormal: {
    color: Colors.black,
    fontFamily: Fonts.MonstRegular,
    fontSize: Dimens.F12
  },
  textSemiBold: {
    color: Colors.black,
    fontFamily: Fonts.MonstSemiBold,
    fontSize: Dimens.F12
  }
});
export default commonStyle;
