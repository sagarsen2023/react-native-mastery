import { StyleSheet, Image } from "react-native";
import products from "@/assets/data/products";
import { Text, View } from "@/src/components/Themed";
import ProductCard from "@/src/components/ProductCard";
import { FlatList } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard singleProduct={item} />}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
      />
    </View>
  );
}
