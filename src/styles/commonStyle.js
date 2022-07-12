import { StyleSheet } from "react-native";
import { Fonts, Dimens, Colors } from "../config/appConstants";
const commonStyle = StyleSheet.create({
  box40: {
    alignItems: "center",
    backgroundColor: Colors.black,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    width: 40
  },
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
  flexRow16: {
    alignItems: "center",
    flexDirection: "row",
    margin: 16
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
  img10: {
    height: 10,
    tintColor: Colors.green,
    width: 10
  },
  img20: {
    height: 20,
    tintColor: Colors.white,
    width: 20
  },
  separator: {
    backgroundColor: Colors.cardLight,
    height: 1,
    opacity: 0.5,
    width: "100%"
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
  },
  width16: {
    width: 16
  }
});
export default commonStyle;
