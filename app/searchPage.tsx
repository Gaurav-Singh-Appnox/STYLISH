import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopList from '@/components/specific/ShopList';
import { useLocalSearchParams } from 'expo-router';

export default function searchPage() {
    const { search } = useLocalSearchParams();
    console.log(typeof search);
  return (
    <View>
       <ShopList searchItem={search} />
    </View>
  )
}

const styles = StyleSheet.create({})