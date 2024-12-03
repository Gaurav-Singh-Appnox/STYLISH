import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  const router = useRouter();
  const navigateToSearchPage = () => {
    router.push("/searchPage");
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity
        style={styles.searchBar}
        onPress={navigateToSearchPage}
        activeOpacity={0.7}
      >
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="grey" />
          <TextInput
            style={styles.inputText}
            placeholder="Search any Product"
            editable={false}
            pointerEvents="none"
          />
        </View>
        <Feather name="mic" size={24} color="grey" />
      </TouchableOpacity>
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
  inputText: {
    flex: 1,
  },
});
