import TimeBanner from "@/components/specific/TimeBanner";
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

const wishlist = () => {
  const wishlishItems = useSelector(
    (state) => state.wishlistSlice.wishlistProducts
  );

  const handlePress = (id: number) => {
    console.log("the id is :", id);
    router.push({ pathname: "/detailsPage", params: { id } });
  };
  return (
    <SafeAreaView>
      <TimeBanner
        heading={"Trending Products"}
        time={"Last Date 29/02/2022"}
        color={"#FD6E87"}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {wishlishItems.map((product: any) => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => handlePress(product.id)}
          >
            <View>
              <Image style={styles.img} source={{ uri: product.img }} />
              <Text style={styles.heading}>{product.name}</Text>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

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
export default wishlist;
