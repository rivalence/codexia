import {
     View, 
     Text,
     Pressable
    } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'
import { QuestionIcon, ContractIcon } from '../../../assets/Icons'

const InfosButton = () => {
  return (
    <View style={styles.homeInfosButtonContainer}>
        <Pressable>
            <View style={styles.homeInfosButton}>
                <QuestionIcon />
            </View>
        </Pressable>
        
        <Pressable>
            <View style={styles.homeInfosButton}>
                <ContractIcon />
            </View>
        </Pressable>
    </View>
    
  )
}

export default InfosButton