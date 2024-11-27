import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  const [search,setSearch]= useState('');
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="grey" />
          <TextInput
            style={styles.inputText}
            placeholder="Search any Product"
          ></TextInput>
        </View>
        <Feather name="mic" size={24} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  inputText: {},
});
