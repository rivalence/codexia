import { View, Text } from 'react-native'
import { styles } from '../../../assets/styles/Styles'

const Header = () => (
    <View>
      <View style={styles.headerApp}>
        <Text style={styles.textHeader}>Codexia</Text>
      </View>
    </View>
)

export default Header