import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/common/Header'
import SearchBar from '@/components/common/SearchBar'
import CircleSlider from '@/components/specific/CircleSlider'
import Button from '@/components/common/Button'

const home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <SearchBar/>
      <CircleSlider/>
      <Button title={"LOUTGOT"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },
  });
  

export default home