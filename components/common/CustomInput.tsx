import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const handleTogglePassword = () => {
    if (onRightIconPress) {
      onRightIconPress();
    } else {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <View >
      <View style={styles.inputContainer}>
        {leftIcon && (
          <FontAwesome
            name={leftIcon}
            size={20}
            color="#888"
            style={styles.icon}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          style={styles.textInput}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={handleTogglePassword}>
            <FontAwesome
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default CustomInput;
