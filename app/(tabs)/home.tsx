import Card from "@/components/common/Card";
import CardType2 from "@/components/common/CardType2";
import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import CircleSlider from "@/components/specific/CircleSlider";
import HomeBanner from "@/components/specific/HomeBanner";
import SpecialOffer from "@/components/specific/SpecialOffer";
import SummerSale from "@/components/specific/SummerSale";
import TimeBanner from "@/components/specific/TimeBanner";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBar />
        <CircleSlider />
        <HomeBanner />
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    // paddingHorizontal:4,
  },
  img: {
    marginTop: 16,
    width: "95%",
    marginHorizontal: 12,
  },
});

export default home;
