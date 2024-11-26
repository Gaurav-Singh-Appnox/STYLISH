import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HorizontalLine from "@/components/common/HorizontalLine";
import {Picker} from '@react-native-picker/picker';
import Button from "@/components/common/Button";

export default function profile() {
  const [selectedState, setSelectedState] = useState("");
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
      <View>
        <Text style={{ marginTop: 20 }}>City</Text>
        <TextInput placeholder="London" style={styles.inputBox}></TextInput>
      </View>
      <View>
      <Text style={{ marginTop: 20 }}>State</Text>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue) => setSelectedState(itemValue)}
        style={{ marginTop: 10, height: 50, width: 400,borderWidth:2,borderColor:"grey" }}
      >
        <Picker.Item label="Select a state" value="" />
        <Picker.Item label="California" value="CA" />
        <Picker.Item label="Texas" value="TX" />
        <Picker.Item label="Florida" value="FL" />
        <Picker.Item label="New York" value="NY" />
      </Picker>
    </View>
      <View style={{marginBottom:36,}}>
        <Text style={{ marginTop: 20 }}>Country</Text>
        <TextInput placeholder="United Kingdom" style={styles.inputBox}></TextInput>
      </View>

      <HorizontalLine/>

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
        <TextInput placeholder="Abhijeet shisodiya" style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 ,}}>IFSC Code</Text>
        <TextInput placeholder="SBIN00248" style={[styles.inputBox,{marginBottom:34}]}></TextInput>
      </View>
      <Button title="Save"/>
      <View style={{marginTop:10}}></View>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imgDiv: {
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    height: 48,
    fontWeight:"bold",
  },
});
