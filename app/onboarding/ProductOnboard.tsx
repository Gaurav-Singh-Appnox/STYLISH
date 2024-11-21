import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductOnboard = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>ProductOnboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductOnboard;
