import Button from "@/components/common/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../store/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleRemoveItem = (id) => {
    showToast("Item Removed");
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    showToast("Cart Cleared");
    dispatch(clearCart());
  };

  const showToast = (msg) => {
    const value = msg;
    ToastAndroid.show(`${value}`, ToastAndroid.SHORT);
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is Empty!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 80 }]}
      >
        <View style={{ flexDirection: "row", marginTop: 13 }}>
          <EvilIcons name="location" size={20} color="black" />
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            Delivery Address:
          </Text>
        </View>

        <View style={styles.delivery}>
          <View style={styles.addressText}>
            <Text>Address:</Text>
            <Text>216 St Paul's Rd, London N1 2LL, UK</Text>
            <Text>Contact: +44-784232</Text>
          </View>
          <View style={styles.newAddress}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </View>
        </View>

        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Shopping List</Text>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearCart}
          >
            <Text style={styles.clearButtonText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.productQuantity}>
                Total Quantity: {item.quantity}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveItem(item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.stickyTabBar}>
        <View style={styles.cartSummary}>
          <Text style={styles.totalAmount}>
            Total: ${totalAmount.toFixed(2)}
          </Text>
        </View>

        <View style={{ width: "50%" }}>
          <Button onPress={handleCheckout} title={"Checkout"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  delivery: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 30,
    gap: 10,
  },
  newAddress: {
    elevation: 3,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  addressText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 3,
    width: "70%",
    fontSize: 10,
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  emptyCartContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
  },
  clearButton: {
    backgroundColor: "#F83758",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  clearButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItem: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 16,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    color: "#F83758",
    marginVertical: 4,
  },
  productQuantity: {
    fontSize: 14,
    color: "#777",
  },
  removeButton: {
    backgroundColor: "#F83758",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  stickyTabBar: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 16,
    // paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  cartSummary: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
