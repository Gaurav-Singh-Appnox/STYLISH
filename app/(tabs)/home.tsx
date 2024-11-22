import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/common/Header'

const home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Thisis the home page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
   
    },
  });
  

export default home