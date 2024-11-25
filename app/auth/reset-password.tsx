import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";

const resetSchema = yup
  .object({
    email: yup.string().email().required("Email is required."),
  })
  .required();

type ErrorState = {
  [key: string]: string;
} & {
  api?: string;
};

const resetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<ErrorState>({});

  const handleSubmit = async () => {
    try {
      await resetSchema.validate({ email }, { abortEarly: false });
      setErrors({});
      const response = await axios.post("url", {
        email,
      });
      console.log("password reset successful", response.data.message);
      router.push("./login");
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
          setErrors({ api: "Invalid email " });
        } else {
          setErrors({ api: "Failed to reset. Please try again later." });
        }
      } else {
        setErrors({ api: "An unexpected error occurred." });
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.loginWelcomeText}>Forgot {"\n"}password?</Text>
      <View>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          leftIcon="envelope"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      <Text style={styles.hintText}>
        <Text style={styles.star}>*</Text> We will send you a message to set or
        reset your new password
      </Text>
      <Button title={"Submit"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingTop: 19,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  loginWelcomeText: {
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 43,
    marginBottom: 36,
  },
  hintText: {
    fontSize: 12,
    fontWeight: "400",
    marginVertical: 26,
  },
  star: {
    color: "#FF4B26",
  },
});

export default resetPassword;
