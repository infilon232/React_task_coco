import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import SkeletonContent from "../skeletonContent";
import c from "../../styles/commonStyle";
class ImageUI extends Component {
  render() {
    const {
      style = {},
      imageStyle,
      isLoading,
      tintColor,
      ...props
    } = this.props;
    const skeletonLayout = [
      {
        key: 1,
        ...StyleSheet.absoluteFill,
        width: style.width,
        height: style.height,
        imageStyle
      }
    ];
    return (
      <View style={style} ref={this._captureRef}>
        <SkeletonContent
          containerStyle={c.centerFlex}
          isLoading={isLoading ? isLoading : false}
          layout={skeletonLayout}
        >
          <Image
            {...props}
            style={[
              StyleSheet.absoluteFill,
              {
                width: style.width,
                height: style.height,
                tintColor: tintColor
              }
            ]}
          />
        </SkeletonContent>
      </View>
    );
  }
}

export default ImageUI;
