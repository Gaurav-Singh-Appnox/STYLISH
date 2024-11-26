import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

export default function ShopList() {
  const data = useSelector((state) => state.productSlice.data);
  const handlePress = (id: number) => {
    router.push({ pathname: "/detailsPage", params: { id } });
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => handlePress(product.id)}
          >
            <View>
              <Image style={styles.img} source={{ uri: product.img }} />
              <Text style={styles.heading}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
              <Text style={styles.rating}>Rating: {product.rating} ★</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginTop: 16,
  },
  card: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  img: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: "#555",
  },
  price: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#F83758",
  },
  rating: {
    marginTop: 5,
    fontSize: 12,
    color: "#777",
  },
});
