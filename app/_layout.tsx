import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CartIcon from "../components/common/CartIcon";
import { persistor, store } from "../store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            name="paymentScreen"
            options={{ headerShown: true, headerTitle: "Confirm Payment" }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
