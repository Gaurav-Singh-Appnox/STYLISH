import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const shop = () => {
  return (
    <View style={styles.container}>
      <Text>shop</Text>
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
  

export default shop