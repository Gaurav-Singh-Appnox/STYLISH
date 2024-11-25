import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/common/Header';
import ShopList from '@/components/specific/ShopList';
import SearchBar from '@/components/common/SearchBar';


const shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Header/>
      <SearchBar/>
      <ShopList/>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
           paddingHorizontal:2,
    },
  });
  

export default shop