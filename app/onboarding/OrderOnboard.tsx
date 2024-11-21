import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrderOnboard = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>OrderOnboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer:{
      flex:1,
      width: "100%",
      backgroundColor:"red",
      flexDirection:"row",
      justifyContent:"center"
    }
  });
  
export default OrderOnboard