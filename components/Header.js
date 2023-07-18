import { View, Text } from 'react-native'
import { styles } from '../assets/styles/Styles'
import {MyHeaderText} from '../assets/TextDesign'

const Header = () => (
    <View>
      <View style={styles.headerApp}>
        <MyHeaderText>CODEXIA</MyHeaderText>
      </View>
    </View>
)

export default Header