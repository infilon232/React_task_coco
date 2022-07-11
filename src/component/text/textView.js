import React, { Component } from "react";
import { Text } from "react-native";
import SkeletonContent from "../skeletonContent";
class TextView extends Component {
  render() {
    const {
      lable,
      textStyle,
      numLine,
      isLoading,
      layoutTop,
      LabelComponent = null,
      ...props
    } = this.props;
    return (
      <SkeletonContent
        containerStyle={{ marginTop: isLoading ? layoutTop : 0 }}
        isLoading={isLoading ? isLoading : false}
        layout={numLine ? layoutText[numLine] : layoutText[0]}
      >
        {LabelComponent ? (
          <LabelComponent />
        ) : (
          <Text {...props} style={textStyle}>
            {lable}
          </Text>
        )}
      </SkeletonContent>
    );
  }
}
export default TextView;

const layoutText = [
  [
    {
      key: 1,
      width: "100%",
      height: 18
    }
  ],
  [
    {
      key: 1,
      width: "100%",
      height: 18
    },
    {
      key: 2,
      width: "100%",
      height: 18,
      marginTop: 8
    }
  ],
  [
    {
      key: 1,
      width: "100%",
      height: 18
    },
    {
      key: 2,
      width: "100%",
      height: 18,
      marginTop: 8
    },
    {
      key: 3,
      width: "100%",
      height: 18,
      marginTop: 8
    }
  ],
  [
    {
      key: 1,
      width: "100%",
      height: 18,
      marginTop: 8
    },
    {
      key: 2,
      width: "100%",
      height: 18,
      marginTop: 8
    },
    {
      key: 3,
      width: "100%",
      height: 18,
      marginTop: 8
    },
    {
      key: 4,
      width: "100%",
      height: 18,
      marginTop: 8
    }
  ]
];
