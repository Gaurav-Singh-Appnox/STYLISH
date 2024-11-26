import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const wishlist = () => {
  const wishlishItems = useSelector(
    (state) => state.productSlice.wishlistProducts
  );
  console.log(wishlishItems[0]);
  const handlePress = () => {
    router.push("/detailsPage");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>wishlist</Text>
        <Text>{wishlishItems.length}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default wishlist;
