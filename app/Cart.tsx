import Button from "@/components/common/Button";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../store/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log("cartItems", cartItems.length);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is Empty!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.productQuantity}>
                Quantity: {item.quantity}
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

        <View style={styles.cartSummary}>
          <Text style={styles.totalAmount}>
            Total: ${totalAmount.toFixed(2)}
          </Text>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearCart}
          >
            <Text style={styles.clearButtonText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>
        <Button title={"Checkout"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
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
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
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
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  cartSummary: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: "#F83758",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  clearButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
