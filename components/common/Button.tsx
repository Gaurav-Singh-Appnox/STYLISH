import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title,onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    // paddingVertical:21,
    height: 55,
    backgroundColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
