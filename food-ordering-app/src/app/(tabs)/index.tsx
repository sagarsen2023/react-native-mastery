import { StyleSheet, Image } from 'react-native';
import products from '@/assets/data/products';
import { Text, View } from '@/src/components/Themed';

export default function TabOneScreen() {
  const singleProduct = products[0]
  return (
    <View style={styles.container}>
      <Image source={{uri: singleProduct.image}} style={styles.image}/>
     <Text style={styles.title}>{singleProduct.name}</Text>
     <Text style={styles.description}>${singleProduct.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#808080",
   margin: 10,
   padding: 10,
   borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});
