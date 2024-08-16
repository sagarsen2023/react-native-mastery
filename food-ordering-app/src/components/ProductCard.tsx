import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { Product } from "@/src/types";
import { Link } from "expo-router";

type ProductcardProps = {
  singleProduct: Product;
};

const ProductCard = ({ singleProduct }: ProductcardProps) => {
  return (
    <Link href={`/menu/${singleProduct.id}`} asChild>
    <Pressable style={styles.container}>
      <Image
        source={{
          uri:
            singleProduct.image ||
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{singleProduct.name}</Text>
      <Text style={styles.description}>${singleProduct.price}</Text>
    </Pressable>
  </Link>
  )
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default ProductCard;
