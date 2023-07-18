import React, {useState} from 'react'
import { View } from "react-native"
import Header from './components/Header'
import BodyDecoration from './components/BodyDecoration'
import PlayButton from './components/PlayButton'
import InfosButton from './components/InfosButton'
import ModalDemo from './components/ModalDemo'

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