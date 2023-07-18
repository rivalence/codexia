import { 
    View,
    Image
} from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/Styles'

const BodyDecoration = () => {
  return (
    <View style={styles.homeBodyDecoration}>
      <Image 
        style={styles.homeLogo}
        source={require('../../../assets/images/ampoule.png')}
        alt="L'ampoule du génie"
      />
    </View>
  )
}

export default BodyDecoration