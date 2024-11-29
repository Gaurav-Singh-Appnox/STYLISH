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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/authSlice";

export default function profile() {
  const dispatch =useDispatch();
  
  const token = useSelector((state)=>state.auth.token)
   
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode,setPincode]= useState("");
  const [address,setAddress]= useState("");
  const [city,setCity ]= useState("");
  const [state,setState]= useState("");
  const [country,setCountry]= useState("");
  const [bankAccountNumber,setBankAccountNumber]= useState("");
  const [accountHolderName,setAccountHolderName]= useState("");
  const [IFSCCode,setIFSCCode]= useState("");
  const [selectedState, setSelectedState] = useState("");


  const personalDetails = {firstName, lastName, email};
  const saveAddress = {pincode,address,city,selectedState,country};
  const saveBankDetails={bankAccountNumber,accountHolderName,IFSCCode};

  const showToast = (message) => {
    ToastAndroid.show(`${message}`, ToastAndroid.SHORT);
  };

  const handleSaveBankDetails = async () => {
    console.log('BankDetails form console:',saveBankDetails);
    try {
      const response = await axios.post('https://674959cf8680202966309ca9.mockapi.io/personalDetails',saveBankDetails)
      showToast('Bank Details Updated');

    } catch (error) {
      console.error('Error:',error);
      
    }
    // router.replace("/(tabs)/account");
  };

  const handleUpdate = async () => {
    console.log('updated personal details', personalDetails);
    try {
      const response = await axios.post(
        'https://stylish-backend-exfz.onrender.com/api/v1/auth/editUser',
        personalDetails,
        { headers:{
          'Authorization':`Bearer ${token}`,

        }}
      );
      showToast('Personal Details Updated');
      router.replace('/account')
       dispatch(setUser(response.data.user));
      
      console.log('API response from server:', response.data.user);

    }catch (error) {
      if (error.response) {
        console.error('API error:', error.response.data);
        showToast('Failed to update: ' + error.response.data.message);
      } else if (error.request) {
        console.error('No response from server:', error.request);
        showToast('Server not reachable. Please try again.');
      } else {
        console.error('Error:', error.message);
        showToast('An unexpected error occurred.');
      }
    }
    
  };
  

   const handleSaveAddress = () =>{
    
    console.log('Saved Address from console',saveAddress);
    try {
      const response = axios.post('https://674959cf8680202966309ca9.mockapi.io/personalDetails',saveAddress)
      console.log('Response :',response)
      
    } catch (error) {
      
      console.error('Error',error,);
    }

   }

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
          <Button onPress={handleUpdate} title={"Update"} />
        </TouchableOpacity>
      </View>

      <HorizontalLine />

      <Text style={{ fontSize: 18, marginTop: 28 }}>
        Business Address Details:
      </Text>
      <View>
        <Text style={{ marginTop: 20 }}>Pincode</Text>
        <TextInput onChangeText={setPincode} style={styles.inputBox} placeholder=""></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>Address</Text>
        <TextInput onChangeText={setAddress} placeholder="" style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>City</Text>
        <TextInput onChangeText={setCity} placeholder="" style={styles.inputBox}></TextInput>
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
        <TextInput onChangeText={setCountry} placeholder="" style={styles.inputBox}></TextInput>
      </View>
      <Button onPress={handleSaveAddress} title="Save Address" />
      <View style={{ marginTop: 28 }}></View>



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
      <Button onPress={handleSaveBankDetails} title="Save Bank Detials" />
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
