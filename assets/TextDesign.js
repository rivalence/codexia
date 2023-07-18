import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'
import { styles } from './styles/Styles'

export const MyAppText = ({children, design}) => {
    const [fontLoaded] = useFonts({
        'Julee' : require('../assets/fonts/Julee-Regular.ttf')
    })

    if (!fontLoaded) return null

    return (
        <Text style={[styles.appText, design]}>{children}</Text>
    )
}

export const MyHeaderText = ({children}) => {
    const [fontLoaded] = useFonts({
        'Irish Grover' : require('../assets/fonts/IrishGrover-Regular.ttf')
    })

    if (!fontLoaded) return null

    return (
        <Text style={styles.textHeader}>{children}</Text>
    )
}