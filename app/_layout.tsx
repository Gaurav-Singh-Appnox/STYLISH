import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
    </Stack>
  );
}
