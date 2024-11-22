import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const OnboardingScreens = [
  {
    img: require("../../assets/images/fashion shop-rafiki 1.png"),
    title: "Choose Product",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    img: require("../../assets/images/Sales consulting-pana 1.png"),
    title: "Make Payment",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    img: require("../../assets/images/Shopping bag-rafiki 1.png"),
    title: "Get Your Order",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < OnboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      router.replace("/auth/login");
    }
  };

  const handleSkip = () => {
    router.replace("/auth/login");
  };

  const handlePrev = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const renderPagination = () => {
    if (currentScreen === 0) {
      return (
        <View style={styles.paginationContainer}>
          <View style={styles.bar} />
          <View style={styles.inactiveCircle} />
          <View style={styles.inactiveCircle} />
        </View>
      );
    } else if (currentScreen === 1) {
      return (
        <View style={styles.paginationContainer}>
          <View style={styles.inactiveCircle} />
          <View style={styles.bar} />
          <View style={styles.inactiveCircle} />
        </View>
      );
    } else {
      return (
        <View style={styles.paginationContainer}>
          <View style={styles.inactiveCircle} />
          <View style={styles.inactiveCircle} />
          <View style={styles.bar} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipButtonContainer}>
        <Text style={styles.stepText}>
          {currentScreen + 1}
          <Text style={styles.spanText}>/{OnboardingScreens.length}</Text>
        </Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={OnboardingScreens[currentScreen].img}
          style={styles.image}
        />
        <Text style={styles.title}>
          {OnboardingScreens[currentScreen].title}
        </Text>
        <Text style={styles.description}>
          {OnboardingScreens[currentScreen].description}
        </Text>
      </View>

      <View style={styles.nextBtnContainer}>
        {/* Previous Button */}
        {currentScreen > 0 && (
          <TouchableOpacity onPress={handlePrev} style={styles.prevButton}>
            <Text style={styles.prevText}>Prev</Text>
          </TouchableOpacity>
        )}

        {/* Pagination */}
        {renderPagination()}

        {/* Next Button */}
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentScreen < OnboardingScreens.length - 1
              ? "Next"
              : "Get Started"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  skipButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  stepText: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  spanText: {
    fontSize: 18,
    color: "#A0A0A1",
    fontWeight: "600",
  },
  skipText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "black",
    lineHeight: 29.26,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: "#A8A8A9",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0.32,
  },
  nextBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  prevButton: {
    marginRight: 20,
  },
  prevText: {
    color: "#A8A8A9",
    fontSize: 18,
    fontWeight: "600",
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bar: {
    width: 40,
    height: 8,
    backgroundColor: "black",
    marginHorizontal: 5,
    borderRadius: 4,
  },
  inactiveCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#A8A8A9",
    marginHorizontal: 5,
  },
  nextText: {
    color: "#F83758",
    fontSize: 18,
    fontWeight: "600",
  },
});
