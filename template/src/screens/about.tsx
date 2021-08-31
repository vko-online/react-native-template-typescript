import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import { RootStackParamList } from 'src/types'

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'About'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
