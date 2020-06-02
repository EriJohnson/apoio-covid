import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 24,
    backgroundColor: '#09A419',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 52,
  },
  cta: {
    color: '#ffffff',
    fontSize: 18,
  },
})
