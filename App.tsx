import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SaveBoard from './components/SaveBoard';
import Home from './components/Home';
import Play from './components/Play';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sudoku" component={Play} />
        <Stack.Screen name="Add board" component={SaveBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
