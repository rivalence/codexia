import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'
import { MyAppText } from '../../../assets/TextDesign'
import { BulbIcon } from '../../../assets/Icons'

const Heading = () => {
  return (
    <View style={styles.gameHeadingContainer}>
        <View style={styles.gameHeadingTextContainer}>
            <MyAppText design={styles.gameHeadingText}>Titre de l'énigme</MyAppText>
        </View>
        <View style={styles.gameHeadingIconContainer}>
            <BulbIcon />
        </View>
    </View>
  )
}

export default Heading