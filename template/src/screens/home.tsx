import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from 'src/types'

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Ionicons name='globe' />
      <Button title='About' onPress={() => navigation.navigate('About')} />
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
