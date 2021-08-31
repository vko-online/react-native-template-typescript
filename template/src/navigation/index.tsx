import React from 'react'
import {
  NavigationContainer
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from 'src/screens/home'
import { RootStackParamList } from 'src/types'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: true}}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}
