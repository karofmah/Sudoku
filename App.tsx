import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SaveBoard from './components/SaveBoard';
import Home from './components/Home';
import Sudoku from './components/Sudoku';
import {useTranslation} from 'react-i18next';
import './locales/i18n';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const {t} = useTranslation(); 

  return(
    <>
     
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          title:t('title.sudoku')
        }} component={Home} />
        <Stack.Screen name="Sudoku" options = {{
          title:t('title.play-sudoku')
        }} component={Sudoku} />
        <Stack.Screen name="Add boards" options = {{
          title:t('title.add-boards')
        }}component={SaveBoard} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>

    
  )
}

