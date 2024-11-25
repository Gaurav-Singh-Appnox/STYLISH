import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";


const signUpSchema = yup
  .object({
    email: yup.string().email().required("Email is required."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required."),
  })
  .required();

type ErrorState = {
  [key: string]: string;
} & {
  api?: string;
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ErrorState>({});
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      await signUpSchema.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      setErrors({});
      const response = await axios.post(
        "https://stylish-backend-exfz.onrender.com/api/v1/auth/signup",
        {
          email,
          password,
          confirmPassword,
        }
      );
      console.log("Signup successful:", response.data);
      router.replace("./login");
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
        if (error.response?.data?.errors) {
          const apiErrors: ErrorState = {};
          Object.entries(error.response.data.errors).forEach(
            ([field, messages]) => {
              apiErrors[field] = Array.isArray(messages)
                ? messages[0]
                : messages;
            }
          );
          setErrors(apiErrors);
        } else {
          setErrors({
            api: "An unexpected error occurred. Please try again later.",
          });
        }
      } else {
        setErrors({ api: "An unexpected error occurred." });
      }
    }
  };

  const handleLogin = () => {
    router.push("./login");
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

        <CustomInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          leftIcon="lock"
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        )}
      </View>

      <View style={styles.btnContainer}>
        <Button title={"Sign up"} onPress={handleSignUp} />
      </View>

      {errors.api && <Text style={styles.errorText}>{errors.api}</Text>}

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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 31,
  },
  btnContainer: {
    marginTop: 52,
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
});
