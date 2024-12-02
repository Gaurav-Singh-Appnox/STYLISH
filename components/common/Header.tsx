import { FontAwesome6 } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View style={styles.container}>
      <View style={styles.headerItemContainer}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <FontAwesome6 name="bars" size={24} color="black" />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require("../../assets/images/headerLogo.png")}
        />

        <View style={styles.userCartContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("(tabs)/account")}
          >
            <Image
              style={styles.userImage}
              source={require("../../assets/images/userImg.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.cartContainer}
          >
            <FontAwesome6 name="cart-shopping" size={24} color="black" />
            {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    elevation: 2, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  logo: {
    width: 111.78,
    height: 31,
    resizeMode: "contain",
  },
  userCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // make it circular
  },
  cartContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
