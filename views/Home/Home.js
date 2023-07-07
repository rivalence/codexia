import React from 'react'
import { View } from "react-native"
import Header from './components/Header'
import BodyDecoration from './components/BodyDecoration'
import PlayButton from './components/PlayButton'
import InfosButton from './components/InfosButton'

const Home = () => {
  return (
    <View>
        <Header />
        <BodyDecoration />
        <PlayButton />
        <InfosButton />
    </View>
    
  )
}

export default Home