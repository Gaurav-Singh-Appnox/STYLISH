import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    await AsyncStorage.setItem("user_token", "your_token_here");
    router.replace("/initial-load");
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signupWelcomeText}>Create an account</Text>
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
        <CustomInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="confirm password"
          secureTextEntry
          leftIcon="lock"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title={"Sign up"} />
      </View>

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
            Already have an account?{" "}
            <Text style={styles.accountExistLink} onPress={handleLogin}>
              Login
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
  signupWelcomeText: {
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 43,
    marginBottom: 36,
  },
  input: {
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  signupButton: {
    backgroundColor: "#F83758",
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  signupButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  accountExistText: {
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
    marginBottom: 30,
  },
  loginIcon: {
    height: 54,
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F83758",
    padding: 15,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 31,
  },
  btnContainer: {
    marginTop: 52,
  },
});
