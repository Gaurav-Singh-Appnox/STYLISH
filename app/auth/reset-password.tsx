import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/common/Button";
import CustomInput from "../../components/common/CustomInput";

const resetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    
    router.push("/auth/login");
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
