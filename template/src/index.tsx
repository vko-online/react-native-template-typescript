import React, { useCallback, useEffect } from 'react'
import { StatusBar, AppState, AppStateStatus } from 'react-native'
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