import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { loadCartFromStorage, setCart } from "../store/slices/cartSlice";
import { initializeWishlist } from "../store/slices/productSlice";
import store from "../store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppInitializer />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="first-splash" />
        <Stack.Screen name="onboarding/index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
        <Stack.Screen name="auth/reset-password" />
        <Stack.Screen name="initial-load" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="detailsPage"
          options={{
            headerShown: true,
            headerTitle: "",
            headerRight: () => <CartIcon />,
          }}
        />
        <Stack.Screen
          name="Cart"
          options={{
            headerShown: true,
            headerTitle: "Cart",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{ headerShown: true, headerTitle: "Profile" }}
        />
        <Stack.Screen
          name="checkout"
          options={{ headerShown: true, headerTitle: "Shopping Bag" }}
        />
        <Stack.Screen
          name="PaymentScreen"
          options={{ headerShown: true, headerTitle: "Confirm Payment" }}
        />
        <Stack.Screen
          name="searchPage"
          options={{ headerShown: true, headerTitle: "search page" }}
        />

      </Stack>

    </Provider>
  );
}

function CartIcon() {
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("cart clicked");
        router.push("/Cart");
      }}
    >
      <View style={{ position: "relative" }}>
        <FontAwesome6 name="cart-shopping" size={24} color="black" />
        <Text style={{ position: "absolute", top: -16, left: "50%" }}>
          {cartItems.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function AppInitializer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeWishlist());

    const initializeCart = async () => {
      const savedCart = await loadCartFromStorage();
      dispatch(setCart(savedCart));
    };

    initializeCart();
  }, [dispatch]);

  return null;
}
