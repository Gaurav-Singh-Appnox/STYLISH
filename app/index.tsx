import { useEffect } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const isFirstTime = await AsyncStorage.getItem('first_time');
      
      if (isFirstTime === null) {
        // First time user
        await AsyncStorage.setItem('first_time', 'false');
        router.replace('/onboarding');
      } else {
        // Check if user is logged in
        const token = await AsyncStorage.getItem('user_token');
        
        if (token) {
          // Logged in user
          router.replace('/initial-load');
        } else {
          // Not logged in
          router.replace('/auth/login');
        }
      }
    };

    checkFirstTimeUser();
  }, []);

  return null;
}
