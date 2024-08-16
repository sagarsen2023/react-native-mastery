import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    console.log(id)
  return (
    <View>
      <Stack.Screen options={{title: "Details"}}/>
      <Text>ProductDetails</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})