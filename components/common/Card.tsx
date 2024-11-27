import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

const data = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    description: "A timeless shirt for casual or formal wear.",
    price: 29.99,
    rating: 4.2,
    category: "Shirt",
    productDetails:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, libero fugit voluptates vero at cupiditate officia exercitationem in nemo eaque illum delectus consectetur omnis odit ratione iure cum itaque dolorum! Nostrum id atque animi, ducimus sit dolores debitis autem nihil accusantium esse consequuntur alias consequatur. Voluptatem necessitatibus, ad accusamus harum quos officiis praesentium! Iusto, velit delectus. At dignissimos voluptas doloremque accusamus tempora ipsa, reprehenderit, unde nulla commodi laboriosam consequuntur. Corrupti perferendis magni expedita necessitatibus quas aliquam ab non vel modi dolorum fuga illum quod fugiat, deleniti ipsum ratione, ut iusto",

    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUtLO-a7dlOdJfKfTzwqYlFJLcNkSBp5mnHdQ7UCUDiZ-1xJrSe-glWIorgzGXBG3qkRvkUMc8KrUPbzQNbEi1AN4-anHhFXZTUerPlFzmoAe3ckMvGWbExB28bUlMK3vLJZ4Unv-grTQ&usqp=CAc",
  },
  {
    id: 2,
    name: "Slim Fit Denim Shirt",
    description: "Stylish slim-fit shirt made of premium denim.",
    price: 34.99,
    rating: 4.5,
    category: "Shirt",
    productDetails:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, libero fugit voluptates vero at cupiditate officia exercitationem in nemo eaque illum delectus consectetur omnis odit ratione iure cum itaque dolorum! Nostrum id atque animi, ducimus sit dolores debitis autem nihil accusantium esse consequuntur alias consequatur. Voluptatem necessitatibus, ad accusamus harum quos officiis praesentium! Iusto, velit delectus. At dignissimos voluptas doloremque accusamus tempora ipsa, reprehenderit, unde nulla commodi laboriosam consequuntur. Corrupti perferendis magni expedita necessitatibus quas aliquam ab non vel modi dolorum fuga illum quod fugiat, deleniti ipsum ratione, ut iusto",

    img: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Linen Casual Shirt",
    description: "Lightweight linen shirt for breezy comfort.",
    price: 25.49,
    rating: 4.0,
    category: "Shirt",
    productDetails:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, libero fugit voluptates vero at cupiditate officia exercitationem in nemo eaque illum delectus consectetur omnis odit ratione iure cum itaque dolorum! Nostrum id atque animi, ducimus sit dolores debitis autem nihil accusantium esse consequuntur alias consequatur. Voluptatem necessitatibus, ad accusamus harum quos officiis praesentium! Iusto, velit delectus. At dignissimos voluptas doloremque accusamus tempora ipsa, reprehenderit, unde nulla commodi laboriosam consequuntur. Corrupti perferendis magni expedita necessitatibus quas aliquam ab non vel modi dolorum fuga illum quod fugiat, deleniti ipsum ratione, ut iusto",

    img: "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "Printed Hawaiian Shirt",
    description: "Vibrant tropical shirt for summer vibes.",
    price: 27.99,
    rating: 4.3,
    category: "Shirt",
    productDetails:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, libero fugit voluptates vero at cupiditate officia exercitationem in nemo eaque illum delectus consectetur omnis odit ratione iure cum itaque dolorum! Nostrum id atque animi, ducimus sit dolores debitis autem nihil accusantium esse consequuntur alias consequatur. Voluptatem necessitatibus, ad accusamus harum quos officiis praesentium! Iusto, velit delectus. At dignissimos voluptas doloremque accusamus tempora ipsa, reprehenderit, unde nulla commodi laboriosam consequuntur. Corrupti perferendis magni expedita necessitatibus quas aliquam ab non vel modi dolorum fuga illum quod fugiat, deleniti ipsum ratione, ut iusto",

    img: "data:image/jpeg;base64,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",
  },
];
const handlePress = (id: number) => {
  router.push({ pathname: "/detailsPage", params: { id } });
};

export default function Card() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
          <View key={item.id} style={styles.card}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <Text style={styles.heading}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <Text style={styles.price}>${item.price}</Text>
            <StarRatingDisplay
              style={{ gap: -3 }}
              starSize={18}
              emptyColor="grey"
              rating={item.rating}
            />
          </View>
        </TouchableOpacity>
      ))}

      {/*       
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/womenkurta.png')} />
        <Text style={styles.heading}>Women Printed Kurta</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>

        <Text style={styles.price}>$1900.90</Text>
        <StarRatingDisplay style={{gap:-3}} starSize={18} emptyColor='grey'
        rating={2.5}
      />

      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/shoes.png')} />
        <Text style={styles.heading}>Women Printed Kurta</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>
        <Text style={styles.price}>$100</Text>
        <StarRatingDisplay style={{gap:-3}} starSize={18} emptyColor='grey'
        rating={4.5}/>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/shoes.png')} />
        <Text style={styles.heading}>Women Printed Kurta</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>
        <Text style={styles.price}>$200</Text>
        <StarRatingDisplay style={{gap:-3}} starSize={18} emptyColor='grey'
        rating={4.5}/>
      </View>
      <View style={styles.card}>
        <Image style={styles.img} source={require('@/assets/images/shoes.png')} />
        <Text style={styles.heading}>Women Printed Kurta</Text>
        <Text style={styles.description}>Lorem, ipsum dolor sit Tempora vitae numquam porro ut nam dicta.</Text>

        <Text style={styles.price}>$1500</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 8,
    marginTop: 16,
  },
  card: {
    width: 190,
    height: 240,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#000',

    // elevation: 2,
  },
  img: {
    width: "100%",
    height: 120,
    // borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
  },
  price: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#F83758",
  },
});
