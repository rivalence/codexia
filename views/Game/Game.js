import { View, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Heading from './sections/Heading'
import BodyGame from './sections/BodyGame'

const Game = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Header />
        <Heading />
        <BodyGame />
      </View>
    </KeyboardAvoidingView>
  )
}

export default Game