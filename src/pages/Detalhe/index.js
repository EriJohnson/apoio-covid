import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Text, View, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

import styles from '../Detalhe/styles'

export default function Detalhe() {
  const route = useRoute()

  const local = route.params.local

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.localTitulo}>{local.nome}</Text>
        <View style={styles.containerEndereco}>
          <Text style={styles.localEndereco}>{local.logradouro} - </Text>
          <Text style={styles.localEndereco}>{local.bairro}</Text>
        </View>
        <Text style={styles.localEndereco}>{local.cidade}</Text>
      </View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
          latitude: Number(local.latitude),
          longitude: Number(local.longitude),
        }}
      >
        <Marker
          title={local.localTitulo}
          coordinate={{
            latitude: Number(local.latitude),
            longitude: Number(local.longitude),
          }}
        ></Marker>
      </MapView>
    </View>
  )
}
