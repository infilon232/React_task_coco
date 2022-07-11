import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Constants } from "../../config/appConstants";
import ImageBackground from "../../component/image/imageBackground";
import { SkeletonContent, Text } from "../../component";
import c from "../../styles/commonStyle";
const s = StyleSheet.create({
  Text: {
    color: Colors.black,
    marginLeft: 3,
    width: 128
  },
  backgrouend: {
    height: 132,
    marginBottom: 10,
    marginTop: 5,
    width: 132
  },
  img: {
    borderRadius: 10
  }
});
const list1 = ({ data, loading, index }) => {
  const navigate = () => {};
  return (
    <SkeletonContent
      containerStyle={c.flex1}
      isLoading={loading ? loading : false}
      layout={[
        {
          key: index,
          height: 132,
          width: 132,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 16
        }
      ]}
    >
      <TouchableOpacity onPress={() => navigate(data)} activeOpacity={0.8}>
        <ImageBackground
          resizeMode={"cover"}
          style={s.backgrouend}
          imageStyle={s.img}
          thumbnailSource={{
            uri:
              !loading &&
              Constants.IMGIX_URL +
                data.imageFilename +
                Constants.IMGIX_BLUR_QUERY
          }}
          source={{
            uri:
              !loading &&
              Constants.IMGIX_URL + data.imageFilename + Constants.IMGIX_QUERY
          }}
        />
        <Text
          layoutTop={8}
          numberOfLines={1}
          isLoading={loading}
          lable={!loading && data.title}
          textStyle={[c.s6, s.Text]}
        />
      </TouchableOpacity>
    </SkeletonContent>
  );
};
export default list1;
