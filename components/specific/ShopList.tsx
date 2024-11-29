import { useRouter } from "expo-router";
import React, { useState } from "react";
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

export default function ShopList({ searchItem = "" }) {
  const router = useRouter();
  const data = useSelector((state) => state.wishlistSlice.data);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredData = data.filter((item) => {
    const matchesSearch = searchItem.trim()
      ? item.name.toLowerCase().includes(searchItem.toLowerCase())
      : true;
    const matchesCategory = selectedCategory
      ? item.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  const handlePress = (id) => {
    router.push({ pathname: "/detailsPage", params: { id } });
  };

  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
      >
        {["All", "Shirt", "Hoodie", "Shoes", "Dress", "Jeans"].map(
          (category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() =>
                setSelectedCategory(category === "All" ? "" : category)
              }
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredData.map((product) => (
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
  categoryContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 8,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: "#F83758",
    borderColor: "#F83758",
  },
  categoryText: {
    fontSize: 14,
    color: "#555",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
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
