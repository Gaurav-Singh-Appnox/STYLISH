import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Index() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const isFirstTime = await AsyncStorage.getItem("first_time");
      if (isFirstTime === null) {
        router.replace("./first-splash");
      } else if (token) {
        router.replace("/initial-load");
      } else {
        router.replace("/auth/login");
      }
    };

    checkFirstTimeUser();
  }, [token]);

  return null;
}
