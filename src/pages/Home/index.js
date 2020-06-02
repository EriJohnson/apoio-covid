import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  const navegarParaLocais = () => navigation.navigate('Locais')

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>COVID-19</Text>
      <TouchableOpacity onPress={() => navegarParaLocais()}>
        <Text style={styles.cta}>Buscar atendimento</Text>
      </TouchableOpacity>
    </View>
  )
}
