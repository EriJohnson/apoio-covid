import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './Home/index'
import Locais from './Locais/index'
import Detalhe from './Detalhe/index'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Locais' component={Locais} />
        <AppStack.Screen name='Detalhe' component={Detalhe} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
