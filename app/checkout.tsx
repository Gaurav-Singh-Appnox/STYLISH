import Button from "@/components/common/Button";
import HorizontalLine from "@/components/common/HorizontalLine";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const router = useRouter();
  const handleProceedToPayment = () => {
    router.push("/paymentScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {/* <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text> */}
              {/* <Text style={styles.productQuantity}>
                Total Quantity: {item.quantity}
              </Text> */}
              <Text style={styles.delivery}>
                Devlivery by <Text style={{ fontWeight: 500 }}>10May20XX</Text>{" "}
              </Text>
            </View>
          </View>
        ))}
      </View>
      {/* <HorizontalLine /> */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.heading}>Order Payment Details</Text>

        <View style={styles.paymentText}>
          <Text style={styles.innerText}>Order Amount</Text>
          <Text style={{}}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.paymentText}>
          <Text style={styles.innerText}>Convinience</Text>
          <Text style={styles.productPrice}>Know more , add coupon</Text>
        </View>
        <View style={styles.paymentText}>
          <Text style={styles.innerText}>Delivery Fee</Text>
          <Text style={styles.productPrice}>Free</Text>
        </View>
      </View>
      <HorizontalLine />
      <View style={[styles.paymentText, { paddingHorizontal: 10 }]}>
        <Text style={styles.heading}>Order Total </Text>
        <Text style={styles.heading}>$ {totalAmount.toFixed(2)}</Text>
      </View>
      <HorizontalLine />
      <View style={{ paddingTop: 40 }}>
        <Button title={"Proceed to Payment"} onPress={handleProceedToPayment} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16 },
  itemContainer: {},

  cartItem: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    // paddingBottom: 16,
  },
  productImage: {
    borderRadius: 10,
    width: 120,
    height: 125,
    resizeMode: "contain",
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    paddingTop: 10,
    fontSize: 14,
  },
  delivery: {
    paddingTop: 10,
  },
  heading: {
    paddingVertical: 30,
    // paddingHorizontal: 22,
    fontSize: 20,
    fontWeight: 500,
  },
  innerText: { fontSize: 16 },
  paymentText: {
    justifyContent: "space-between",
    backgroundColor: "",
    // paddingHorizontal: 20,
    flexDirection: "row",
    paddingVertical: 10,
  },
  productPrice: {
    fontSize: 16,
    textDecorationColor: "underline",
    fontWeight: 400,
    color: "#F83758",
  },
  productQuantity: {
    fontSize: 14,
    color: "#777",
  },
});
