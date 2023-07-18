import { 
    StyleSheet
} from 'react-native'
import {colors} from '../../constants/Constants'

export const styles = StyleSheet.create({
    container : {
        paddingTop: 40,
        flex: 1, 
        alignItems: 'center',
    },
    appColor : {
        backgroundColor: colors.app
    },
    appText: {
        fontFamily: 'Julee',
        fontSize: 20
    },
    headerApp : {
        paddingTop: 30,
        alignItems: 'center',
    },
    textHeader : {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Irish Grover',
        color: "#ffffff",
    },
    homeLogo : {
        height: 200,
        width: 200
    },
    homeBodyDecoration : {
        paddingTop: 200,
        alignItems: 'center',
    },
    homePlayButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    homePlayButton : {
        backgroundColor: colors.button,
        padding: 20,
        margin: 30,
        borderRadius: 10,
    },
    homeInfosButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
        
    },
    homeInfosButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.button,
        margin: 10,
        marginBottom: 20,
        height: 40,
        width: 40,
        alignItems: 'center'
    },
    homeModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundModal
    },

    homeModalContent: {
        height: "50%",
        width: "80%",
        backgroundColor: colors.backgroundContent,
        borderRadius: 10,
        alignItems: 'center'
    },
    homeModalText: {
        padding: 25,
        height: "90%"
    },

    homeModalButtonContainer: {
        flexDirection: 'row',
        flex: 1,
        width: "100%",
        alignItems: 'flex-end',
    },

    homeModalButton: {
        width: "50%",
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.button
    }, 
    homeModalButtonText: {
        fontSize: 15,
        padding: 10
    }
})