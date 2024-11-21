import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const wishlist = () => {
  return (
    <View style={styles.container}>
      <Text>wishlist</Text>
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