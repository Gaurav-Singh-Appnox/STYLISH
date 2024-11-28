import { logOut } from "@/store/slices/authSlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
const account = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logOut());
    router.replace("/auth/login");
  };

  const handleEdit = () => {
    router.push("/profile");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainHeading}>Settings</Text>

      <View style={styles.profileSetting}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <FontAwesome5 name="user" size={20} color="black" />
            <Text style={styles.sectionHeading}>Profile Settings</Text>
          </View>
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.settingText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.profileText}>Full Name</Text>

          <Text style={{ fontSize: 16 }}>{userData?.name || "user"}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.profileText}>Email</Text>
          <Text style={{ fontSize: 16 }}>{userData?.email}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.profileText}>Phone</Text>
          <Text style={{ fontSize: 16 }}>+92 39312123123</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.profileText}>Address</Text>
          <Text style={{ fontSize: 16 }}>1850BigELm City Kansas</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text style={styles.profileText}>About</Text>
          <Text style={{ fontSize: 16 }}>
            Aliquto portofilio mornsish buthn
          </Text>
        </View>
      </View>

      {/* <View style={styles.paymentSetting}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <AntDesign name="creditcard" size={24} color="black" />
            <Text style={styles.sectionHeading}>Payment Settings</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.settingText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text style={styles.profileText}>Default Credit Card</Text>
        </View>
      </View> */}

      <View style={styles.appSettings}>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            gap: 20,
            // justifyContent: "",
            alignItems: "center",
          }}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.sectionHeading}>Additional Settings</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.profileText}>Theme</Text>
          <Text style={{ color: "grey", fontSize: 14 }}>Dark</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.profileText}>Using Since</Text>
          <Text style={{ color: "grey", fontSize: 14 }}>4sept2012</Text>
        </View>
        <View>
          <Text style={styles.profileText}>Help and support</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}></TouchableOpacity>
      </View>
      <View style={styles.appSettings}>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            gap: 20,
            // justifyContent: "",
            alignItems: "center",
          }}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.sectionHeading}>App Settings</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.profileText}>Languages</Text>
          <Text style={{ color: "grey", fontSize: 14 }}>English</Text>
        </View>
        <View>
          <Text style={styles.profileText}>Delivery Address</Text>
        </View>
        <View>
          <Text style={styles.profileText}>Help and support</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Text
              style={[
                styles.profileText,
                { color: "red", paddingLeft: 20, marginBottom: 20 },
              ]}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0d9ddf",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 500,
    color: "#5B869B",
  },
  profileSetting: {
    padding: 10,
    borderRadius: 10,
    // elevation: 3,
    width: "100%",
    backgroundColor: "white",
    gap: 20,
    borderWidth: 0.2,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#346b82",
  },
  settingText: {
    fontSize: 16,
    fontWeight: 400,
  },

  paymentSetting: {
    marginTop: 25,
    padding: 10,
    borderRadius: 10,
    // elevation: 3,
    width: "100%",
    backgroundColor: "white",
    gap: 20,
    borderWidth: 0.2,
  },
  appSettings: {
    marginTop: 25,
    padding: 10,
    borderRadius: 10,
    // elevation: 3,
    width: "100%",
    backgroundColor: "white",
    gap: 20,
    
    borderWidth: 0.2,
  },
});

export default account;
