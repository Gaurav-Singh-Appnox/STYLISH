import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

const data = [
  {
    title: "Explore the Latest Fashion Trends!",
    url: require("./../../assets/images/slider01.webp"),
  },
  {
    title: "Shop Your Favorite Styles!",
    url: require("@/assets/images/slider02.jpg"),
  },
  {
    title: "Discover Your Unique Look!",
    url: require("@/assets/images/slider03.webp"),
  },
];

export default function ImageSlider() {
  const [position, setPosition] = useState(0);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    const toggle = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();

      setPosition((prevPosition) =>
        prevPosition === data.length - 1 ? 0 : prevPosition + 1
      );
    }, 3000);

    return () => clearInterval(toggle);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageWrapper, { opacity: fadeAnim }]}>
        <Image source={data[position].url} style={styles.image} />
        <Text style={styles.overlayText}>{data[position].title}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  overlayText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
});
