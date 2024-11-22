import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <View style={{ flexDirection: "row",alignItems:"center",gap:10 }}>
          
          <Feather name="search" size={24} color="grey" />
          <TextInput style={{letterSpacing:1.5}} placeholder="Search any Product" ></TextInput>
        </View>
        <Feather name="mic" size={24} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "",
    flexDirection: "row",
    // width: "100%",
    height: 40,
    marginTop:16,
    paddingHorizontal:16,
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius:10,
    flexDirection: "row",
    width: '100%',
    
    justifyContent: "space-between",
    // marginHorizontal: 38,
    alignItems:"center",
  },
});
