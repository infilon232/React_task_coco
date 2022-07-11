import React, { PureComponent } from "react";
import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { Text } from "../../component";
import { Colors } from "../../config/appConstants";

class Button extends PureComponent {
  render() {
    const {
      onPress,
      text,
      containerStyle,
      activityIndicatorColor,
      visible,
      textStyle,
      loading,
      id
    } = this.props;
    const ActivityStyle = [
      { alignSelf: "flex-start", marginLeft: 45 },
      textStyle
    ];
    return (
      <TouchableOpacity
        style={containerStyle}
        activeOpacity={visible ? 1 : 0.6}
        onPress={
          visible
            ? null
            : () => {
                onPress(id);
              }
        }
      >
        {visible ? (
          <View style={ActivityStyle}>
            <ActivityIndicator
              size="small"
              color={activityIndicatorColor || Colors.white}
            />
          </View>
        ) : (
          <Text
            layoutTop={8}
            isLoading={loading}
            lable={text}
            textStyle={textStyle}
          />
        )}
      </TouchableOpacity>
    );
  }
}
export default Button;
