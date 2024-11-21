import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PaymentOnboard = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>PaymentOnboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer:{
      backgroundColor:"red",
      flexDirection:"row",
      justifyContent:"center"
    }
  });

export default PaymentOnboard