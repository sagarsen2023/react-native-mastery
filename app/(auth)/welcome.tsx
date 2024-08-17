import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className='text`-2xl'>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
