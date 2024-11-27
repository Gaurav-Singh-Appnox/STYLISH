import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import ShopList from "@/components/specific/ShopList";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const shop = () => {
  const { search } = useLocalSearchParams();
  console.log(typeof search);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <SearchBar />
        <ShopList searchItem={search} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 2,
  },
});

export default shop;
