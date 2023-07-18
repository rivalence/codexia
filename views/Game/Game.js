import { View, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Heading from './sections/Heading'
import BodyGame from './sections/BodyGame'
import { styles } from '../../assets/styles/Styles'

const Game = () => {
  return (
      <View style={styles.container}>
        <Header />
        <Heading />
        <BodyGame />
      </View>
  )
}

export default Game