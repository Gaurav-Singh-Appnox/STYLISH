import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

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
      <Text style={styles.loginWelcomeText}>Welcome {"\n"}Back!</Text>
      <View style={styles.inputContainer}>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          leftIcon="envelope"
        />

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          leftIcon="lock"
        />
      </View>
      <View style={styles.btnContainer} >
        <Button title={"Login"} onPress={handleLogin} />
      </View>
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
            <Text style={styles.accountExistLink} onPress={handleSignup}>
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
    marginBottom: 36,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#F83758",
    marginTop: 9,
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
    marginTop: 52,
  },
  socialLoginIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
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
    fontWeight: "600",
  },
  accountExistLink: {
    color: "#F83758",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 31,
  },
  btnContainer: {
    marginTop: 52,
  },
});
