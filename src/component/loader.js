import React from "react";
import { StyleSheet, View, Modal, Text, ActivityIndicator } from "react-native";
import { Colors } from "../config/appConstants";
import c from "../styles/commonStyle";

const s = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  modalBackground: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  textB: {
    color: Colors.black,
    top: 8,
    ...c.textBold
  }
});

const Loader = (props) => {
  const { loading, text } = props;

  return (
    <Modal transparent={true} animationType={"none"} visible={loading}>
      <View style={s.modalBackground}>
        <ActivityIndicator color={Colors.black} size={"large"} />
        <Text style={s.textB}>{text ? text : "Please wait..."}</Text>
      </View>
    </Modal>
  );
};

export default Loader;
