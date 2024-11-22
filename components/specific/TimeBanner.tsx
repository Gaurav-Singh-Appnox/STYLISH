import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function BlueBanner({heading,time,color}:any) {
  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer,{backgroundColor:color}]}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.timing}>{time}</Text>
        </View>
        <View style={{justifyContent:"center"}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View All</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    paddingHorizontal: 16,
  },
  mainContainer: {
    height: 80,
    width:'100%',
    borderRadius: 8,padding:10,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#4392F9",
   
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    marginBottom: 4,
  },
  timing: {
    color: "white",
    fontSize: 14,
  },
  btn: {
    // paddingVertical: 8,
    
    width:89,
    height:28,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
