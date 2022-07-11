import React from "react";
import { StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const s = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingBottom: 100
      }
    })
  },
  contentContainer: {
    flexGrow: 1
  }
});

const ScrollableAvoidKeyboard = (props) => {
  const { style, contentContainerStyle } = props;

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      style={[s.container, style]}
      contentContainerStyle={[s.contentContainer, contentContainerStyle]}
      enableOnAndroid={true}
      {...props}
      extraScrollHeight={10}
    />
  );
};

export default ScrollableAvoidKeyboard;
