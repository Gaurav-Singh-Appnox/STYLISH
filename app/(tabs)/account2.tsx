import { logOut } from "@/store/slices/authSlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function account2() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.user);
  const { image: profileImage } = useSelector((state) => state.auth);
  let name = userData.firstName;
  console.log(name);

  const [image, setImage] = useState(
    profileImage || require("@/assets/images/userImg.png")
  );

  console.log("userData in account:", userData);
  const handleLogout = () => {
    dispatch(logOut());
    router.replace("/auth/login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: image }}
          style={{ height: 100, width: 100, borderRadius: 100 }}
        />
        <Text style={styles.name}>{name == null ? "USER" : name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>
      <View style={{ marginTop: 8 }}>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <View style={styles.rectangle}>
            <View style={styles.inside}>
              <FontAwesome name="user" size={24} color="black" />
              <Text>Profile</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rectangle}>
            <View style={styles.inside}>
              <MaterialIcons name="settings" size={24} color="black" />
              <Text>Settings</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rectangle}>
            <View style={styles.inside}>
              <MaterialIcons name="contacts" size={24} color="black" />
              <Text>Contact</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rectangle}>
            <View style={styles.inside}>
              <AntDesign name="sharealt" size={24} color="black" />
              <Text>Share App</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rectangle}>
            <View style={styles.inside}>
              <Entypo name="help-with-circle" size={24} color="black" />
              <Text>help</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.signout}>
        <Text style={styles.signoutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "offwhite",
    // justifyContent:"",
    flex: 1,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
  },
  name: {
    paddingTop: 8,
    fontSize: 28,
  },
  email: {
    color: "grey",
    fontSize: 18,
  },
  inside: {
    flexDirection: "row",
    gap: 10,
  },
  rectangle: {
    backgroundColor: "#F8F7F7",
    paddingHorizontal: 10,
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    height: 50,
    borderRadius: 10,
  },
  signout: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column-reverse",
    marginBottom: 10,
  },
  signoutText: {
    fontSize: 20,
    color: "red",
  },
});
