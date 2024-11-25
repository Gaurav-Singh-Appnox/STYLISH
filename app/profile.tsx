import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HorizontalLine from "@/components/common/HorizontalLine";

export default function profile() {
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
        <Text style={{ marginTop: 20 }}>Email Address</Text>
        <TextInput
          placeholder="xyz@gmail.com"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Password</Text>
        <TextInput placeholder="*******" style={styles.inputBox}></TextInput>
      </View>
      <View
        style={{
            marginTop:14,
            marginBottom:36,
          backgroundColor: "",
          
        }}
      >
        

        <TouchableOpacity>
          <Text style={{ fontSize: 12,color:"#F83758",textAlign:"right",textDecorationLine:"underline" }}>Change Password</Text>
        </TouchableOpacity>
      </View>
      
      <HorizontalLine/>

      <Text style={{ fontSize: 18, marginTop: 28 }}>Business Address Details:</Text>
      <View>
        <Text style={{ marginTop: 20 }}>Pincode</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="4123"
        ></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Address</Text>
        <TextInput placeholder="214 St Paul's Rd" style={styles.inputBox}></TextInput>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imgDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    height: 48,
  },
});
