import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function checkout() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>checkout</Text>
      <TouchableOpacity onPress={() => router.push("/payment")}>
        <Text>proceed to payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
});
