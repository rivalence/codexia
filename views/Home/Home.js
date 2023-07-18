import React, {useState} from 'react'
import { View } from "react-native"
import Header from '../../components/Header'
import BodyDecoration from './sections/BodyDecoration'
import PlayButton from './sections/PlayButton'
import InfosButton from './sections/InfosButton'
import ModalDemo from './sections/ModalDemo'

const Home = () => {
    const [showModalDemo, setShowModalDemo] = useState(false)

    return (
        <View>
            <ModalDemo 
                showModalDemo={showModalDemo}
                setShowModalDemo={setShowModalDemo}
            />
            <Header />
            <BodyDecoration />
            <PlayButton setShowModalDemo={setShowModalDemo}/>
            <InfosButton />
        </View> 
  )
}

export default Home