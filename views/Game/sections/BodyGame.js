import { View, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'
import { MyAppText } from '../../../assets/TextDesign'
import { SubmitIcon } from '../../../assets/Icons'

const BodyGame = () => {
  return (
    <View style={styles.gameBodyContainer}>
        <View style={styles.gameBodyContentContainer}>
            <MyAppText>Contenu de l'énigme</MyAppText>
        </View>

        <View style={styles.gameBodyAnswerContainer}>
            <MyAppText>Réponse:</MyAppText>
            <View style={styles.gameBodyInputContainer}>
                <TextInput 
                    style={styles.gameBodyinputText}
                    placeholder='Votre réponse...'
                />  
                <SubmitIcon/>
            </View>
            
        </View>
    </View>
  )
}

export default BodyGame