import React from 'react'
import Screens from 'react-native-screens'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from 'src/navigation'

Screens.enableScreens()

export default function App () {
  return (
    <SafeAreaProvider>
        <Navigation />
        <StatusBar />
    </SafeAreaProvider>
  )
}
