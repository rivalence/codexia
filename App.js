import React from 'react';
import Home from './views/Home/Home'
import Game from './views/Game/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={Home}
        />
        <Stack.Screen 
          name='Game' 
          component={Game}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
