import { 
    View,
    Text,
    Modal,
    TouchableOpacity } from 'react-native'
import React from 'react'
import {  } from 'react-native'
import { styles } from '../../../assets/styles/Styles'
import { colors } from '../../../assets/constants/Constants'

const ModalDemo = ({showModalDemo, setShowModalDemo}) => {

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
                    <Text
                        style={styles.homeModalText}
                    >
                        Lorhefbvu urvhbbvr" uhbvbyb"
                    </Text>
                    <View
                        style={styles.homeModalButtonContainer}
                    >
                        <TouchableOpacity 
                            style={styles.homeModalButton}
                            >
                            <Text style={styles.homeModalButtonText}>Suivant</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.homeModalButton}
                            onPress={() => setShowModalDemo(false)}    
                        >
                            <Text style={styles.homeModalButtonText}>Passer la démo</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </Modal>
  )
}

export default ModalDemo