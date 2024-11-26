import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function SummerSale() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/SummerSale.png")}
      />
      <View style={styles.description}>
        <View style={{padding:10}}>
        <Text style={{fontSize:20,fontWeight:600}}>New Arrivals</Text>
        <Text style={{fontSize:16,}}>Summers's 25 Collections</Text>
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
    paddingHorizontal: 18,
    marginTop: 10,
    backgroundColor:"white"
    
  },

  img: {
    // marginHorizontal:36,
    height: 200,
    width: "100%",
    borderRadius: 10,
    // width:360,
  },
  description: {
    width:'99%',
    height:70,
    flexDirection: "row",
     justifyContent: "space-between",
    backgroundColor: "",
  },
  btn: {
    // paddingVertical: 8,
    backgroundColor: "#F83758",
    width: 89,
    height: 30,
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
