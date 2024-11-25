import { Provider, useDispatch } from "react-redux";
import  store  from "../store/store"
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useEffect } from "react";
import { loadCartFromStorage, setCart } from "../store/slices/cartSlice";

export default function RootLayout() {
  return (
    <Provider store={store}> 
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="first-splash" />
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/reset-password"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="initial-load" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="detailsPage"
          options={{
            headerShown: true,
            headerTitle: "",
            headerRight: () => (
              <TouchableOpacity onPress={() => router.push("/Cart")}>
                <FontAwesome6 name="cart-shopping" size={24} color="black" />
              </TouchableOpacity>),}}
        />
        <Stack.Screen name="profile" options={{headerShown:true, headerTitle:"Profile"}}/>
      </Stack>
    </Provider>
  );
}


function CartInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeCart = async () => {
      const savedCart = await loadCartFromStorage();
      dispatch(setCart(savedCart));
    };

    initializeCart();
  }, [dispatch]);

  return null;
}
