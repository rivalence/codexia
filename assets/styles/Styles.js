import { 
    StyleSheet
} from 'react-native'
import {colors} from '../constants/Constants'

export const styles = StyleSheet.create({
    container : {
        paddingTop: 40,
        flex: 1, 
        alignItems: 'center',
    },
    headerApp : {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader : {
        fontSize: 40,
        fontWeight: 'bold'
    },
    appColor : {
        backgroundColor: colors.app
    },
    homeLogo : {
        height: 200,
        width: 200
    },
    homeBodyDecoration : {
        paddingTop: 200,
        alignItems: 'center'
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
    homeTextPlayButton: {
        fontSize: 20
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
    }
})