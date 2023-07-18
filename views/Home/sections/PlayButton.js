import {
     View, 
     Pressable
    } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../../assets/styles/Styles'
import { MyAppText } from '../../../assets/TextDesign'

const PlayButton = ({setShowModalDemo, navigation}) => {
  const [count, setCount] = useState(1)

  return (
    <Pressable 
      style={styles.homePlayButton}
      onPress={() => {  //Modal lors du premier, ensuite navigation pour le reste
        if(count == 1) {
          setShowModalDemo(true)
          setCount(count + 1)
        } else navigation.navigate('Game')
      }
        
      }
    >
      <View style={styles.homePlayButtonContainer}>
        <MyAppText>Débuter l'aventure Codexia</MyAppText>
      </View>
    </Pressable>
  )
}

export default PlayButton