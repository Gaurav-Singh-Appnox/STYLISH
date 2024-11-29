import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("cart clicked");
        router.push("/Cart");
      }}
    >
      <View style={{ position: "relative" }}>
        <FontAwesome6 name="cart-shopping" size={24} color="black" />
        <Text style={{ position: "absolute", top: -16, left: "50%" }}>
          {cartItems.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
