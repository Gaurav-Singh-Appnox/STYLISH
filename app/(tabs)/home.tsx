import Card from "@/components/common/Card";
import CardType2 from "@/components/common/CardType2";
import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import CircleSlider from "@/components/specific/CircleSlider";
import HomeBanner from "@/components/specific/HomeBanner";
import ImageSlider from "@/components/specific/ImageSlider";
import SpecialOffer from "@/components/specific/SpecialOffer";
import SummerSale from "@/components/specific/SummerSale";
import TimeBanner from "@/components/specific/TimeBanner";
import React, { useCallback, useRef, useState } from "react";
import {
  Image,
  RefreshControl,
  Animated as RNAnimated,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const Home = () => {
  const scrollY = useRef(new RNAnimated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const scrollPosition = useRef(0);

  // Refresh callback
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Detect scroll direction
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    if (currentScrollY > scrollPosition.current && currentScrollY > 50) {
      setHeaderVisible(false);
    } else if (currentScrollY < scrollPosition.current) {
      setHeaderVisible(true);
    }

    scrollPosition.current = currentScrollY;
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNAnimated.View
        style={[
          styles.fixedHeader,
          {
            transform: [
              {
                translateY: headerVisible ? 0 : -100,
              },
            ],
          },
        ]}
      >
        <Header />
      </RNAnimated.View>

      <RNAnimated.ScrollView
        onScroll={(event) => {
          handleScroll(event);
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SearchBar />
        <CircleSlider />
        <HomeBanner />
        <ImageSlider />
        <TimeBanner
          heading={"Deal of the Day"}
          time={"22h 55m 20sec remaining"}
          color={"#4392F9"}
        />
        <Card />
        <SpecialOffer />

        <Image
          style={styles.img}
          source={require("../../assets/images/mac.png")}
        />

        <TimeBanner
          heading={"Trending Products"}
          time={"Last Date 29/02/2022"}
          color={"#FD6E87"}
        />
        <CardType2 />
        <SummerSale />
        <Image
          style={[styles.img, { resizeMode: "stretch", borderRadius: 10 }]}
          source={require("../../assets/images/BrownShoes.png")}
        />
      </RNAnimated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#f9f9f9",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scrollViewContent: {
    paddingTop: 60,
  },
  img: {
    marginTop: 16,
    width: "95%",
    marginHorizontal: 12,
  },
});

export default Home;
