import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Colors, Fonts, Images, ImageView } from "../../config/appConstants";
import c from "../../styles/commonStyle";

const pageStyle = StyleSheet.create({
  container: {
    ...c.flexRow,
    backgroundColor: Colors.searchbarBg,
    borderRadius: 16,
    flex: 0.95,
    height: 50,
    margin: 16,
    paddingLeft: 12
  },
  input: {
    color: Colors.black,
    fontFamily: Fonts.OpenSemiBold,
    height: 50,
  },
  root: {
    ...c.flexRowBetween,
    alignSelf: "flex-start"
  }
});
const Searchbar = (props) => {
  const { onPress, tintColor } = props;
  return (
    <View style={pageStyle.root}>
      <View style={pageStyle.container}>
        <Image
          style={{ ...c.img20, tintColor: tintColor ? tintColor : Colors.black }}
          source={ImageView.search}
        />
        <TextInput
          style={pageStyle.input}
          selectionColor={Colors.black}
          {...props}
        />
      </View>
      <TouchableOpacity style={[c.box40, { backgroundColor: tintColor ? tintColor : Colors.black }]} onPress={onPress}>
        <Image style={c.img20} source={ImageView.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
