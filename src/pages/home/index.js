import React from "react";
import { AppRoot, Header, Searchbar, Text } from "../../component";
import styles from "../../component/slider/index.style";
import Carousel from "../../component/snap-carousel";
import SliderEntry from "../../component/slider/SliderEntry";
import { Colors, Screen, slider, Strings } from "../../config/appConstants";
import commonStyle from "../../styles/commonStyle";

const Home = ({ navigation }) => {
  const width = Screen.width - 6;

  const renderItemWithParallax = ({ item, index }) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        navigation={navigation}
        onPress={() => navigation.navigate("Details")}
      />
    );
  };

  return (
    <AppRoot>
      <Header
        lable={Strings.app_Name}
        openAccount={() => {}}
        openDrawer={() => {}}
      />
      <Text textStyle={commonStyle.text40} lable={"Discover \nA New World"} />

      <Searchbar
        placeholderTextColor={Colors.red}
        placeholder="Search Places"
        tintColor={Colors.red}
      />

      <Carousel
        data={slider}
        renderItem={renderItemWithParallax}
        sliderWidth={width}
        itemWidth={width * 0.76}
        hasParallaxImages={true}
        firstItem={1}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />

      {/* <Pagination
        dotsLength={slider.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor={Colors.primary}
        dotStyle={styles.paginationDot}
        inactiveDotColor={Colors.white}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        // carouselRef={this._slider1Ref}
        // tappableDots={!!this._slider1Ref}
      /> */}
    </AppRoot>
  );
};

export default Home;
