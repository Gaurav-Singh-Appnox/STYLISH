import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "@/components/common/Button";
import HorizontalLine from "@/components/common/HorizontalLine";
import { setUser } from "@/store/slices/authSlice";
import { router } from "expo-router";

const profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  // Toast utility
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  // Yup Validation Schemas
  const personalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const addressSchema = Yup.object().shape({
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    selectedState: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleUpdate = async (values) => {
    console.log("Updated Personal Details:", values);

    try {
      const response = await axios.post(
        "https://stylish-backend-exfz.onrender.com/api/v1/auth/editUser",
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      showToast("Personal Details Updated");
      router.replace("/account");
      dispatch(setUser(response.data.user));
    } catch (error) {
      if (error.response) {
        console.error("API error:", error.response.data);
        showToast("Failed to update: " + error.response.data.message);
      } else {
        console.error("Error:", error.message);
        showToast("An unexpected error occurred.");
      }
    }
  };

  const handleSaveAddress = async (values) => {
    console.log("Saved Address:", values);

    try {
      const response = await axios.post(
        "https://674959cf8680202966309ca9.mockapi.io/personalDetails",
        values
      );
      showToast("Address Saved");
    } catch (error) {
      console.error("Error:", error);
    }
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
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={personalDetailsSchema}
        onSubmit={handleUpdate}
      >
        {({ handleChange, handleSubmit, errors, touched, values }) => (
          <>
            <TextInput
              placeholder="First Name"
              onChangeText={handleChange("firstName")}
              value={values.firstName}
              style={styles.inputBox}
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}

            <TextInput
              placeholder="Last Name"
              onChangeText={handleChange("lastName")}
              value={values.lastName}
              style={styles.inputBox}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.error}>{errors.lastName}</Text>
            )}

            <TextInput
              placeholder="Email Address"
              onChangeText={handleChange("email")}
              value={values.email}
              style={styles.inputBox}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TouchableOpacity>
              <Button onPress={handleSubmit} title="Update" />
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <HorizontalLine />

      <Text style={{ fontSize: 18, marginTop: 28 }}>Business Address Details:</Text>
      <Formik
        initialValues={{
          pincode: "",
          address: "",
          city: "",
          selectedState: "",
          country: "",
        }}
        validationSchema={addressSchema}
        onSubmit={handleSaveAddress}
      >
        {({ handleChange, handleSubmit, errors, touched, values }) => (
          <>
            <TextInput
              placeholder="Pincode"
              onChangeText={handleChange("pincode")}
              value={values.pincode}
              style={styles.inputBox}
            />
            {touched.pincode && errors.pincode && (
              <Text style={styles.error}>{errors.pincode}</Text>
            )}

            <TextInput
              placeholder="Address"
              onChangeText={handleChange("address")}
              value={values.address}
              style={styles.inputBox}
            />
            {touched.address && errors.address && (
              <Text style={styles.error}>{errors.address}</Text>
            )}

            <TextInput
              placeholder="City"
              onChangeText={handleChange("city")}
              value={values.city}
              style={styles.inputBox}
            />
            {touched.city && errors.city && (
              <Text style={styles.error}>{errors.city}</Text>
            )}

            <Picker
              selectedValue={values.selectedState}
              onValueChange={handleChange("selectedState")}
              style={styles.picker}
            >
              <Picker.Item label="Select a state" value="" />
              <Picker.Item label="California" value="CA" />
              <Picker.Item label="Texas" value="TX" />
              <Picker.Item label="Florida" value="FL" />
              <Picker.Item label="New York" value="NY" />
            </Picker>
            {touched.selectedState && errors.selectedState && (
              <Text style={styles.error}>{errors.selectedState}</Text>
            )}

            <TextInput
              placeholder="Country"
              onChangeText={handleChange("country")}
              value={values.country}
              style={styles.inputBox}
            />
            {touched.country && errors.country && (
              <Text style={styles.error}>{errors.country}</Text>
            )}

            <Button onPress={handleSubmit} title="Save Address" />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

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
  picker: {
    marginTop: 10,
    height: 50,
    width: 400,
    borderWidth: 2,
    borderColor: "grey",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default profile;
