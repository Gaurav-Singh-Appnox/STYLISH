import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Button({title}) {
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  btn: {
    width: 317,
    height: 55,
    backgroundColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, 
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
