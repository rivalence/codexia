import {
     View, 
     Text,
     Pressable
    } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'

const PlayButton = ({setShowModalDemo}) => {
  return (
    <Pressable 
      style={styles.homePlayButton}
      onPress={() => setShowModalDemo(true)}
    >
      <View style={styles.homePlayButtonContainer}>
        <Text style={styles.homeTextPlayButton}>Débuter l'aventure Codexia</Text>
      </View>
    </Pressable>
  )
}

export default PlayButton