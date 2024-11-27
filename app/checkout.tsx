import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Checkout() {
  const router = useRouter(); // Use the hook to get the router object

  return (
    <View style={styles.container}>
      <Text>Checkout</Text>
      <TouchableOpacity onPress={() => router.push("/PaymentScreen")}>
        <Text>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light grey background
    padding: 20,
  },
});
