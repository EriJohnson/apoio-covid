import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D7E5DE',
  },
  header: {
    backgroundColor: '#09A419',
    height: 130,
  },
  listaLocais: {
    marginTop: 32,
  },
  locais: {
    alignSelf: 'center',
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    width: '88%',
  },
  locaisTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09A419',
  },
  locaisEndereco: {
    flexDirection: 'row',
  },
})
