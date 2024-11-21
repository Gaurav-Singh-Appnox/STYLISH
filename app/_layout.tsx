import { Stack } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Initial stack screens */}
      <Stack.Screen name="onboarding/index" options={{ headerShown: true }} />
      <Stack.Screen name="auth/login" options={{ headerShown: true }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: true }} />
      <Stack.Screen name="auth/reset-password" />
      <Stack.Screen name="initial-load" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}


