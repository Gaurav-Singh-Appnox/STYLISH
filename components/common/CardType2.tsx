import { ScrollView, StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'

export default function CardType2() {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/watch.png')} />
        <Text style={styles.heading}>Watch Rolex Lorem, ipsum dolor.</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>

        <Text style={styles.price}>$1900.90</Text>

      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/whiteShoes.png')} />
        <Text style={styles.heading}>White Shoes for male and female</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>
        <Text style={styles.price}>$100</Text>
        
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/shoes.png')} />
        <Text style={styles.heading}>black white shoes</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>
        <Text style={styles.price}>$200</Text>
       
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/shoes.png')} />
        <Text style={styles.heading}>Women Printed Kurta</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>

        <Text style={styles.price}>$1500</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 8,
    marginTop:16,
  },
  card: {
    width: 190, 
    height:240,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#000',
  
    // elevation: 2, 
  },
  img: {
    width: '100%',
    height: 120,
    // borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description:{
    fontSize:10,

  },
  price: {
    marginTop:10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F83758',
  },
});
