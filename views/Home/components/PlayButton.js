import {
     View, 
     Pressable
    } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'
import { MyAppText } from '../../../assets/TextDesign'

const PlayButton = ({setShowModalDemo}) => {
  return (
    <Pressable 
      style={styles.homePlayButton}
      onPress={() => setShowModalDemo(true)}
    >
      <View style={styles.homePlayButtonContainer}>
        <MyAppText>Débuter l'aventure Codexia</MyAppText>
      </View>
    </Pressable>
  )
}

export default PlayButton