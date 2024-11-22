import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CircleSlider() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.circleSlider}
      >
        <View style={styles.card}>
          <Image source={require('../../assets/images/Beauty.png')} style={{ height: 56, width: 56 }} />
          <Text>Beauty</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/fashion.png')} style={{ height: 56, width: 56 }} />
          <Text>Fashion</Text>
        </View>
        <View  style={styles.card}>
          <Image source={require('../../assets/images/kids.png')} style={{ height: 56, width: 56 }} />
          <Text>Kids</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/mens.png')} style={{ height: 56, width: 56 }} />
          <Text>Mens</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/women.png')} style={{ height: 56, width: 56 }} />
          <Text>Womens</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/mens.png')} style={{ height: 56, width: 56 }} />
          <Text>Winters</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/images/women.png')} style={{ height: 56, width: 56 }} />
          <Text>Summers</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '',
    width: '100%',
    height: 90,
    marginTop: 16,
  },
  circleSlider: {
    gap: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
    width: 80,
    height: 80,
  },
});
