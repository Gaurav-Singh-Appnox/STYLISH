import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement login logic
    // On successful login:
    await AsyncStorage.setItem('user_token', 'your_token_here');
    router.replace('/initial-load');
  };

  const handleForgotPassword = () => {
    router.push('/auth/reset-password');
  };

  const handleSignup = () => {
    router.push('/auth/signup');
  };

  return (
    <View>
      {/* Login form */}
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Email" 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
