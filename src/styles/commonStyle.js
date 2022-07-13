import { StyleSheet } from "react-native";
import { Colors } from "../config/appConstants";
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
  }
});
export default commonStyle;
