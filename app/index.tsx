import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const isFirstTime = await AsyncStorage.getItem("first_time");
      if (isFirstTime === null) {
        router.replace("./first-splash");
      } else {
        const token = await AsyncStorage.getItem("user_token");
        if (token) {
          router.replace("/initial-load");
        } else {
          router.replace("/auth/login");
        }
      }
    };

    checkFirstTimeUser();
  }, []);

  return null;
}
