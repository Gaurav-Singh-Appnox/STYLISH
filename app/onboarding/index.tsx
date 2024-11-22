import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OrderOnboard from "./OrderOnboard";
import PaymentOnboard from "./PaymentOnboard";
import ProductOnboard from "./ProductOnboard";

const OnboardingScreens = [
  <ProductOnboard />,
  <PaymentOnboard />,
  <OrderOnboard />,
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

  return (
    <View style={styles.container}>
      <View style={styles.skipButtonContainer}>
        <Text>
          {currentScreen + 1}/{OnboardingScreens.length}
        </Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      {OnboardingScreens[currentScreen]}
      <View style={styles.nextBtnContainer}>
        <TouchableOpacity onPress={handleNext}>
          <Text>
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
    justifyContent: "space-between",
    padding: 30,
  },
  skipButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextBtnContainer: {
    flexDirection: "row-reverse",
  },
});
