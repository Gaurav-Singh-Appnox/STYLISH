import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ReadMore from "@fawazahmed/react-native-read-more";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { updateWishlist } from "../store/slices/productSlice";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.data);
  const wishlistItems = useSelector(
    (state) => state.productSlice.wishlistProducts
  );
  const { id } = useLocalSearchParams();

  const productId = parseInt(id);

  const product = products.find((item) => item.id === productId);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  useEffect(() => {
    const wished = wishlistItems.find((item) => item.id === productId);
    setIsWishlist(wished);
  }, [wishlistItems, productId]);


  const handleAddToCart = () => {
    dispatch(addToCart(productId));
  };

  const toggleWishlist = () => {
    setIsWishlist((prev) => !prev);
    dispatch(updateWishlist(product.id));
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Icon
          name="heart"
          size={30}
          onPress={() => toggleWishlist()}
          color={`${isWishlist ? "red" : "black"}`}
          style={{
            position: "absolute",
            top: 10,
            left: 280,
            zIndex: 10,
          }}
        />
        <Image source={{ uri: product.img }} style={styles.productImage} />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.subtitle}>{product.description}</Text>

      <ReadMore numberOfLines={6} style={styles.description}>
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      </ReadMore>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: {product.rating} ★</Text>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => {
          handleAddToCart();
        }}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            console.log("View Similar Products");
          }}
        >
          <FontAwesome name="search" size={20} color="black" />
          <Text style={styles.actionButtonText}>View Similar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            console.log("Added to Compare");
          }}
        >
          <MaterialIcons name="compare-arrows" size={20} color="#333" />
          <Text style={styles.actionButtonText}>Add to Compare</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  imgContainer: {
    position: "relative",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
    color: "#555",
  },
  description: {
    fontSize: 14,
    marginBottom: 24,
    color: "#777",
    lineHeight: 22,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F83758",
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: "#F83758",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "48%",
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
