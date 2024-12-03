import ShopList from "@/components/specific/ShopList";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<TextInput>(null);
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleSearch = () => {};

  return (
    <View style={styles.searchPageContainer}>
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="grey" />
          <TextInput
            ref={searchInputRef}
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
            style={styles.inputText}
            placeholder="Search any Product"
            autoFocus={true}
          />
        </View>
        <Feather name="mic" size={24} color="grey" />
      </View>
      <ShopList searchItem={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchPageContainer: {
    padding: 8,
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
