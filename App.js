import React from 'react';
import { View } from 'react-native'
import Home from './views/Home/Home'
import { styles } from './assets/styles/Styles'
import Game from './views/Game/Game';

export default function App() {
  return (
    <View 
      style={[
        styles.appColor, 
        styles.container]}
        >
      <Game />
    </View>
    
  );
}
