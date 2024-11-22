import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SpecialOffer() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../assets/images/specialOffer.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Special Offer</Text>
        <Text style={styles.description}>
          We make sure you get the offer you need at the best price
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '100%',
    height: 84,
    backgroundColor: '',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center', 
    gap: 10,
  },
  image: {
    width: 75,
    height: 70,
  },
  textContainer: {
    // flex: 1,
    width:294, 
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'grey', 
    flexWrap: 'wrap', 
  },
});
