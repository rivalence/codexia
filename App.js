import React from 'react';
import { View } from 'react-native'
import Home from './views/Home/Home'
import { styles } from './assets/styles/Styles'

export default function App() {
  return (
    <View 
      style={[
        styles.appColor, 
        styles.container]}
        >
      <Home />
    </View>
    
  );
}
