import {
     View, 
     Text,
     Pressable
    } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'

const InfosButton = () => {
  return (
    <View style={styles.homeInfosButtonContainer}>
        <Pressable>
            <View style={styles.homeInfosButton}>
                <Text>?</Text>
            </View>
        </Pressable>
        
        <Pressable>
            <View style={styles.homeInfosButton}>
                <Text>?</Text>
            </View>
        </Pressable>
    </View>
    
  )
}

export default InfosButton