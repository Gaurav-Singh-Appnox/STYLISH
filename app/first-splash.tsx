import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function FirstSplash() {
  useEffect(() => {
    const navigateToOnboarding = async () => {
      //  await AsyncStorage.setItem("first_time", "false");
      setTimeout(() => {
        router.replace("/onboarding");
      }, 2000);
    };

    navigateToOnboarding();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/onBoardSplash.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: "60%",
    height: 200,
  },
});
