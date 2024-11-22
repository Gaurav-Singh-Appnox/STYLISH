import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function Header() {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 90,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <Entypo name="menu" size={37} color="black" />
        <Image
          style={{ width: 111.78, height: 31 }}
          source={require("../../assets/images/headerLogo.png")}
        />
        <Image
          style={{ width: 40, height: 40,marginRight:5 }}
          source={require("../../assets/images/userImg.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
