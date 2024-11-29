import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HorizontalLine from "@/components/common/HorizontalLine";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/common/Button";
import { router } from "expo-router";
import axios from "axios";

export default function profile() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const data = [firstname, lastname, email];




  const showToast = () => {
    ToastAndroid.show(" Saved successfully !", ToastAndroid.SHORT);
  };
  const handleSave = () => {
    showToast();
    
    console.log(data)
    router.replace("/(tabs)/account");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgDiv}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("assets/images/userImg.png")}
        />
      </View>
      <Text style={{ fontSize: 18, marginTop: 28 }}>Personal Details:</Text>

      <View>
        <Text style={{ marginTop: 16 }}>First Name</Text>
        <TextInput
          placeholder=""
          onChangeText={setFirstName}
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 16 }}>Last Name</Text>
        <TextInput
          placeholder=""
          onChangeText={setLastName}
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 16 }}>Email Address</Text>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 14,
          marginBottom: 36,
          backgroundColor: "",
        }}
      >
        <TouchableOpacity>
          <Button onPress={handleSave} title={"Save"} />
        </TouchableOpacity>
      </View>

      <HorizontalLine />

      <Text style={{ fontSize: 18, marginTop: 28 }}>
        Business Address Details:
      </Text>
      <View>
        <Text style={{ marginTop: 20 }}>Pincode</Text>
        <TextInput style={styles.inputBox} placeholder=""></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Address</Text>
        <TextInput placeholder="" style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>City</Text>
        <TextInput placeholder="" style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>State</Text>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => setSelectedState(itemValue)}
          style={{
            marginTop: 10,
            height: 50,
            width: 400,
            borderWidth: 2,
            borderColor: "grey",
          }}
        >
          <Picker.Item label="Select a state" value="" />
          <Picker.Item label="California" value="CA" />
          <Picker.Item label="Texas" value="TX" />
          <Picker.Item label="Florida" value="FL" />
          <Picker.Item label="New York" value="NY" />
        </Picker>
      </View>
      <View style={{ marginBottom: 36 }}>
        <Text style={{ marginTop: 20 }}>Country</Text>
        <TextInput placeholder="" style={styles.inputBox}></TextInput>
      </View>

      <HorizontalLine />

      <Text style={{ fontSize: 18, marginTop: 28 }}>Bank Address Details:</Text>
      <View>
        <Text style={{ marginTop: 20 }}>Bank Account Number</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="2046xxxxxxx"
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Account Holder's Name</Text>
        <TextInput
          placeholder="Abhijeet shisodiya"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>IFSC Code</Text>
        <TextInput
          placeholder="SBIN00248"
          style={[styles.inputBox, { marginBottom: 34 }]}
        ></TextInput>
      </View>
      <Button onPress={handleSave} title="Save" />
      <View style={{ marginTop: 10 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  imgDiv: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    height: 48,
    fontWeight: "bold",
  },
});
