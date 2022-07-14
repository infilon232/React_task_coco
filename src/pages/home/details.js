import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import { AppRoot, ImageBackground, Image, Button, Text } from "../../component";
import { Colors, Dimens, ImageView, Screen } from "../../config/appConstants";
import commonStyle from "../../styles/commonStyle";
import c from "../../styles/commonStyle";
const Home = ({ navigation }) => {
  const [activeImage, setActiveImage] = useState(0);

  const imageText = (image, text) => {
    return (
      <View style={commonStyle.flexRow}>
        <Image source={image} style={s.img} tintColor={Colors.red} />
        <Text textStyle={s.txt} lable={text} />
      </View>
    );
  };

  return (
    <AppRoot hidden={true}>
      {/* <Header lable={"ddddd"} openAccount={() => { }} openDrawer={() => { }} /> */}
      <ScrollView style={c.flex1}>
        <ImageBackground
          imageStyle={s.bgImg}
          resizeMode="stretch"
          style={s.bgImgContainer}
          source={data.images[activeImage].img}
        >
          <View style={{ left: 20 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
              style={{
                alignSelf: "flex-start",
                width: "95%",
                height: Screen.height * 0.12,
              }}
            >
              {data.images.map((item, i) => {
                return (
                  <React.Fragment key={item.id}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        ...s.thumbnails,
                        borderWidth: activeImage == i ? 5 : 3,
                        marginLeft: i === 0 ? 0 : 2
                      }}
                      onPress={() => setActiveImage(i)}
                    >
                      <Image
                        resizeMode="cover"
                        source={item.img}
                        style={{
                          height:
                            Screen.height * 0.09 + (activeImage == i ? 0 : 2),
                          width:
                            Screen.height * 0.09 + (activeImage == i ? 0 : 2)
                        }}
                      />
                    </TouchableOpacity>
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </View>
        </ImageBackground>

        <View style={s.inner}>
          <View style={commonStyle.flexRowBetween}>
            <View>
              <Text textStyle={s.country} lable={data.country} />
              <Text textStyle={s.place} lable={data.place} />
            </View>
            <Text textStyle={s.price} lable={data.price} />
          </View>

          <View style={commonStyle.flexRow}>
            {imageText(ImageView.star, data.rating)}
            {imageText(ImageView.clock, data.time)}
            {imageText(ImageView.location, data.length)}
          </View>

          <Text textStyle={s.description} lable={data.description} />
        </View>
        <View style={{height:50}}/>
      </ScrollView>
      <Button
        text="Book Now"
        containerStyle={s.btn}
        onPress={() => navigation.goBack()}
      />
    </AppRoot>
  );
};

export default Home;

const s = StyleSheet.create({
  bgImg: {
    borderRadius: 20
  },
  bgImgContainer: {
    alignSelf: "center",
    height: Screen.height * 0.48,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: "100%"
  },
  btn: {
    backgroundColor: Colors.red,
    borderRadius: 30,
    bottom: 20,
    marginHorizontal: Screen.hp(6)
  },
  country: {
    alignSelf: "flex-start",
    backgroundColor: Colors.searchbarBg,
    borderRadius: 50,
    color: Colors.red,
    fontWeight: "bold",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  description: {
    color: Colors.tabGray,
    fontSize: Dimens.F18,
    marginTop: 16
  },
  img: {
    ...commonStyle.img20
  },
  inner: {
    padding: 20
  },
  place: {
    color: Colors.black,
    fontSize: Dimens.F40,
    fontWeight: "bold",
    marginVertical: 12
  },
  price: {
    color: Colors.black,
    fontSize: Dimens.F30,
    fontWeight: "bold"
  },
  thumbnails: {
    alignItems: "center",
    borderColor: Colors.white,
    borderRadius: 16,
    justifyContent: "center",
    marginRight: 10,
    overflow: "hidden"
  },
  txt: {
    color: Colors.tabGray,
    fontSize: Dimens.F18,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 20
  }
});

const data = {
  country: "Turkey",
  place: "Cappadocia",
  rating: "5.0",
  time: "30 mins",
  length: "20 km",
  price: "$50.00",
  description: `Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians.`,
  images: [
    {
      id: 1,
      img: ImageView.img1
    },
    {
      id: 2,
      img: ImageView.img2
    },
    {
      id: 2,
      img: ImageView.img3
    },
    {
      id: 2,
      img: ImageView.img4
    }
  ]
};
