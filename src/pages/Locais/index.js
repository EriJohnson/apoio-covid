import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import styles from '../Locais/styles'

export default function Locais() {
  const [locais, setLocais] = useState([])

  const navigation = useNavigation()

  const navegarParaDetalhes = local => {
    navigation.navigate('Detalhe', { local })
  }

  async function carregarLocais() {
    const { data } = await api.get()

    setLocais(data.unidades)
  }

  useEffect(() => {
    carregarLocais()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        style={styles.listaLocais}
        data={locais}
        keyExtractor={local => local.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.locais}
            onPress={() => navegarParaDetalhes(item)}
          >
            <Text style={styles.locaisTitulo}>{item.nome}</Text>
            <View style={styles.locaisEndereco}>
              <Text>{item.logradouro} - </Text>
              <Text>{item.bairro}</Text>
            </View>
            <Text>{item.cidade}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
