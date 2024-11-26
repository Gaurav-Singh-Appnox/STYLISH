import { FontAwesome6 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <View style={styles.container}>
      <View style={styles.headerItemContainer}>
        <Entypo name="menu" size={32} color="black" />
        <Image
          style={{ width: 111.78, height: 31 }}
          source={require("../../assets/images/headerLogo.png")}
        />
        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)/account");
          }}
          style={styles.userCartContainer}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/userImg.png")}
          />
          <TouchableOpacity
            onPress={() => {
              router.push("/Cart");
            }}
            style={styles.cartContainer}
          >
            <FontAwesome6 name="cart-shopping" size={28} color="black" />
            <Text style={styles.cartLength}>{cartItems.length}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headerItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "",
  },
  userCartContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cartContainer: {
    position: "relative",
  },
  cartLength: {
    position: "absolute",
    left: "50%",
    top: -14,
  },
});
