import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const OnboardingScreens = [
  {
    title: 'Choose Product',
    description: 'Browse and select from our wide range of products'
  },
  {
    title: 'Make Payment',
    description: 'Secure and easy payment options'
  },
  {
    title: 'Get Order',
    description: 'Quick delivery to your doorstep'
  }
];

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < OnboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      router.replace('/auth/login');
    }
  };

  const handleSkip = () => {
    router.replace('/auth/login');
  };

  return (
    <View>
      {/* Onboarding screen content */}
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text>Skip</Text>
      </TouchableOpacity>

      <Text>{OnboardingScreens[currentScreen].title}</Text>
      <Text>{OnboardingScreens[currentScreen].description}</Text>

      <TouchableOpacity onPress={handleNext}>
        <Text>{currentScreen < OnboardingScreens.length - 1 ? 'Next' : 'Get Started'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20
      }
  });
