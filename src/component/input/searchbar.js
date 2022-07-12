import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Colors, Fonts, Images } from "../../config/appConstants";
import c from "../../styles/commonStyle";

const pageStyle = StyleSheet.create({
  container: {
    ...c.flexRow,
    backgroundColor: Colors.searchbarBg,
    borderRadius: 5,
    flex: 0.94,
    height: 40,
    margin: 16,
    paddingLeft: 12
  },
  input: {
    color: Colors.black,
    fontFamily: Fonts.OpenSemiBold,
    height: 40,

    paddingLeft: 12
  },
  root: {
    ...c.flexRowBetween,
    alignSelf: "flex-start"
  }
});
const Searchbar = ({ props, onPress }) => {
  return (
    <View style={pageStyle.root}>
      <View style={pageStyle.container}>
        <Image
          style={{ ...c.img20, tintColor: Colors.black }}
          source={Images.search}
        />
        <TextInput
          style={pageStyle.input}
          selectionColor={Colors.black}
          {...props}
        />
      </View>
      <TouchableOpacity style={c.box40} onPress={onPress}>
        <Image style={c.img20} source={Images.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
