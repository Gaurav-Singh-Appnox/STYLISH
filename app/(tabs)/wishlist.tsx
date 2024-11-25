import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const wishlist = () => {
  const handlePress=()=>{
    router.push('/detailsPage')

  }
  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={handlePress}>
    <Text>wishlist</Text>
      
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  

export default wishlist