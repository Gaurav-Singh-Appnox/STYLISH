import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CircleSlider() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.circleSlider}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/women.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Womens</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/mens.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Mens</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/fashion.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Fashion</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/mens.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Winters</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/Beauty.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Beauty</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/kids.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Kids</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(tabs)/shop")}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/women.png")}
              style={{ height: 56, width: 56 }}
            />
            <Text>Summers</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    marginTop: 16,
  },
  circleSlider: {
    gap: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  card: {
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 10,
    width: 80,
    height: 80,
  },
});
