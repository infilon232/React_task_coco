import React, { Component } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
class ImageBackground extends Component {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);
  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const {
      children,
      style = {},
      imageStyle,
      isLoading,
      source,
      thumbnailSource = "",
      ...props
    } = this.props;
    const skeletonLayout = [
      {
        key: 1,
        ...StyleSheet.absoluteFill,
        width: style.width,
        height: style.height,
        imageStyle,
      },
    ];

    return (
      <View style={style} ref={this._captureRef}>
          <View
            style={[{
              flex: 1,
              backgroundColor: isLoading ? "tranparent" : '#E1E9EE',
            }, imageStyle]}
          >
            <Animated.Image
              {...props}
              source={thumbnailSource}
              style={[
                {
                  flex: 1,
                  width: style.width,
                  height: style.height,
                  opacity: this.thumbnailAnimated,
                },
                imageStyle,
              ]}
              onLoad={this.handleThumbnailLoad}
              blurRadius={1}
            />
            <Animated.Image
              {...props}
              source={source}
              style={[
                StyleSheet.absoluteFill,
                {
                  width: style.width,
                  height: style.height,
                  opacity: this.imageAnimated,
                },
                imageStyle,
              ]}
              onLoad={this.onImageLoad}
            />
          </View>
        {children}
      </View>
    );
  }
}

export default ImageBackground;
