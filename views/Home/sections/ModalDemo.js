import { 
    View,
    Modal,
    TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {  } from 'react-native'
import { styles } from '../../../assets/styles/Styles'
import { MyAppText } from '../../../assets/TextDesign'

const ModalDemo = ({showModalDemo, setShowModalDemo}) => {
    const etape_demo = ["Text 1", "Text 2"]

    const [countEtape, setCountEtape] = useState(0)

    //Rendu principal
    return (
        <Modal
            animationType='slide'
            visible={showModalDemo}
            onRequestClose={() => setShowModalDemo(false)}
            transparent
        >
            <View 
                style={styles.homeModalContainer}
            >
                <View
                    style={styles.homeModalContent}
                >
                    <MyAppText
                        design={styles.homeModalText}
                    >
                        {etape_demo[countEtape]}
                    </MyAppText>
                    <View
                        style={styles.homeModalButtonContainer}
                    >
                        <TouchableOpacity 
                            style={styles.homeModalButton}
                            onPress={() => setCountEtape(countEtape + 1)}
                        >
                            <MyAppText 
                                design={styles.homeModalButtonText}
                            >
                                {etape_demo.length == countEtape + 1 ? "Commencer à jouer" : "Suivant"}
                            </MyAppText>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.homeModalButton}
                            onPress={() => setShowModalDemo(false)}    
                        >
                            <MyAppText design={styles.homeModalButtonText}>Passer la démo</MyAppText>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </Modal>
  )
}

export default ModalDemo