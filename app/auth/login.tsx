import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await AsyncStorage.setItem("user_token", "your_token_here");
    router.replace("/initial-load");
  };

  const handleForgotPassword = () => {
    router.push("/auth/reset-password");
  };

  const handleSignup = () => {
    router.push("/auth/signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginWelcomeText}>Welcome Back!</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.socialLogin}>
        <Text style={styles.continueText}>- OR Continue with -</Text>
        <View style={styles.socialLoginIcons}>
          <View style={styles.loginIcon}>
            <Image source={require("../../assets/images/GoogleIcon.png")} />
          </View>
          <View style={styles.loginIcon}>
            <Image source={require("../../assets/images/appleIcon.png")} />
          </View>
          <View style={styles.loginIcon}>
            <Image source={require("../../assets/images/facebookIcon.png")} />
          </View>
        </View>
        <View style={styles.accountExistText}>
        <Text style={styles.accountExistMessage}>
          Don't have an account?{" "}
          <Text
            style={styles.accountExistLink}
            onPress={handleSignup}
          >
            Sign Up
          </Text>
        </Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingTop: 19,
  },
  loginWelcomeText: {
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 43,
    marginBottom:36
  },
  input: {
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: "#F83758",
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#575757",
    // marginVertical: ,
  },
  continueText: {
    textAlign: "center",
    fontSize: 12,
    color: "#575757",
    fontWeight: "500",
  },
  socialLogin: {
    flexDirection: "column",
    alignItems: "center",
    marginTop:52,
    // backgroundColor:"red"
  },
  socialLoginIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    // marginBottom: 30,
  },
  loginIcon: {
    height: 54,
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F83758",
    padding: 15,
  },
  accountExistText: {
    marginTop: 20,
    alignItems: "center",
  },
  accountExistMessage: {
    fontSize: 14,
    color: "#575757",
  },
  accountExistLink: {
    color: "#F83758",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
