import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function HomeBanner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/homeBanner.jpg')} 
        style={styles.img} 
      />
      <View style={styles.overlay}>
        <Text style={styles.discountText}>50-40% OFF</Text>
        <Text style={styles.subtitle}>Now in (product)</Text>
        <Text style={styles.subtitle}>All colours</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    position: 'relative',
    width: '100%',
    height: 220, 
    backgroundColor: '#f5f5f5', 
    paddingHorizontal:16
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 40,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  button: {
    marginTop: 16,
    width:150,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
