import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from 'src/navigation'

export default function Index () {
  return (
    <SafeAreaProvider>
        <Navigation />
        <StatusBar />
    </SafeAreaProvider>
  )
}
