import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D7E5DE',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#09A419',
    height: 130,
    width: '100%',
    padding: 24,
  },
  localTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  containerEndereco: {
    fontSize: 14,
    flexDirection: 'row',
    color: '#ffffff',
  },
  localEndereco: {
    fontSize: 14,
    color: '#ffffff',
  },
  mapStyle: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
