import { 
    StyleSheet
} from 'react-native'
import {colors, css} from '../../constants/Constants'

export const styles = StyleSheet.create({
    container : {
        paddingTop: 40,
        flex: 1, 
        alignItems: 'center',
    },
    appColor : {
        backgroundColor: colors.app
    },

    // TextDesign.js
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

    // BodyDecoration
    homeLogo : {
        height: 200,
        width: 200
    },
    homeBodyDecoration : {
        paddingTop: 200,
        alignItems: 'center',
    },

    //PlayButton.js
    homePlayButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    homePlayButton : {
        backgroundColor: colors.button,
        padding: css.paddingContent,
        margin: 30,
        borderRadius: css.radiusButton,
    },

    //InfoButton.js
    homeInfosButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
        
    },
    homeInfosButton: {
        padding: css.paddingContent / 2,
        borderRadius: css.radiusButton * 2,
        backgroundColor: colors.button,
        margin: 10,
        marginBottom: 20,
        height: 40,
        width: 40,
        alignItems: 'center'
    },

    //ModalDemo.js
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
        borderRadius: css.radiusButton,
        alignItems: 'center'
    },
    homeModalText: {
        padding: css.paddingContent,
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
        padding: css.paddingContent / 2
    },

    //Heading.js
    gameHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 15,
        marginTop: 50
    },
    gameHeadingTextContainer: {
        width: "80%",
        backgroundColor: colors.backgroundContent,
        alignItems: 'center',
        borderRadius: css.radiusContent
    },
    gameHeadingText: {
        padding: css.paddingContent / 2,
        fontSize: 23
    },
    gameHeadingIconContainer: {
        justifyContent: 'center'
    },
    
    //BodyGame.js
    gameBodyContainer: {
        marginTop: 20,
        borderRadius: css.radiusContent,
        flexDirection: 'column',
        rowGap: 5,
        padding: css.paddingContent,
        alignItems: 'center',
        backgroundColor: colors.backgroundContent,
        height: "60%"
    },
    gameBodyContentContainer: {
        height: "80%",
        width: "90%",
        alignItems: 'center'
    },
    gameBodyAnswerContainer: {
        width: "80%",
    },
    gameBodyinputText : {
        borderWidth: 1,
        height: 40,
        borderRadius: css.radiusContent,
        marginTop: 5,
        marginBottom: 5,
        width: "90%"
    },
    gameBodyInputContainer: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})