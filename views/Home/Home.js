import React, {useState} from 'react'
import { View } from "react-native"
import Header from '../../components/Header'
import BodyDecoration from './sections/BodyDecoration'
import PlayButton from './sections/PlayButton'
import InfosButton from './sections/InfosButton'
import ModalDemo from './sections/ModalDemo'
import { styles } from '../../assets/styles/Styles'

const Home = ({navigation}) => {
    const [showModalDemo, setShowModalDemo] = useState(false)

    return (
        <View style={[styles.container, styles.appColor]}>
            <ModalDemo 
                showModalDemo={showModalDemo}
                setShowModalDemo={setShowModalDemo}
            />
            <Header />
            <BodyDecoration />
            <PlayButton 
                setShowModalDemo={setShowModalDemo}
                navigation={navigation}
            />
            <InfosButton />
        </View> 
  )
}

export default Home