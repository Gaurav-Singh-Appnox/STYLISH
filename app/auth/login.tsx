import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";
import {useDispatch} from "react-redux"
import { setUser } from "../../store/slices/authSlice";
import { ActivityIndicator } from "react-native";

const loginSchema = yup
  .object({
    email: yup.string().email().required("Email is required."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
  })
  .required();

type ErrorState = {
  [key: string]: string;
} & {
  api?: string;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorState>({});
  const dispatch = useDispatch();
  const [isLoding,setIsLoding]= useState(false);

  const handleLogin = async () => {
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setErrors({});
      const response = await axios.post(
        "https://stylish-backend-exfz.onrender.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data))
      router.replace("/initial-load");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: ErrorState = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      } else if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrors({ api: "Invalid email or password." });
        } else {
          setErrors({ api: "Failed to login. Please try again later." });
        }
      } else {
        setErrors({ api: "An unexpected error occurred." });
      }
    }
  };

  const handleForgotPassword = () => {
    router.push("/auth/reset-password");
  };

  const handleSignup = () => {
    router.push("/auth/signup");
  };

  if(!isLoding){
    <ActivityIndicator size={"large"} color={"blue"}/>
  }
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
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          leftIcon="lock"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>
      <View style={styles.btnContainer}>
        <Button title={"Login"} onPress={handleLogin} />
        {errors.api && <Text style={styles.errorText}>{errors.api}</Text>}
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
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
