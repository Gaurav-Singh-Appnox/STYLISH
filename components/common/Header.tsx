import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Header() {
  return (
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingRight:25}}>
      <View
        style={{
          //   width: "100%",
          height: 56,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          gap:85,
          alignItems: "center",
          marginHorizontal: 16,
          backgroundColor: "",
        }}
      >
        <Entypo name="menu" size={32} color="black" />
        <Image
          style={{ width: 111.78, height: 31 }}
          source={require("../../assets/images/headerLogo.png")}
        />
        <TouchableOpacity onPress={()=>{router.push('/(tabs)/account')}}>
          
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/userImg.png")}
          />
        </TouchableOpacity>
      
      </View>
      <TouchableOpacity onPress={()=>{router.push('/Cart')}}>
        <FontAwesome6 name="cart-shopping" size={28} color="grey" />


        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
