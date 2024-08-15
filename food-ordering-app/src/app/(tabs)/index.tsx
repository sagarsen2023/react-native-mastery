import { StyleSheet, Image } from "react-native";
import products from "@/assets/data/products";
import { Text, View } from "@/src/components/Themed";
import ProductCard from "@/src/components/ProductCard";


export default function TabOneScreen() {
  return (
    <View>
      {products.map((item, index) => (
        <ProductCard singleProduct={item} key={index} />
      ))}
    </View>
  );
}


