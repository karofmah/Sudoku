import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import SmallBoard from './SmallBoard';
import { useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';


const storeData = async (id:number,value:any) => {
    try {
      console.log("saved")
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(id.toString(), jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const clearAll = async () => {
    try {
      console.log('Cleared')
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
  }
async function SaveData(){

    clearAll()
  
    console.log("CLEAR")

    const easyObject={
  
      value:
      [[3, 9, 0, 5, 7, 2, 0, 4, 0], 
      [2, 1, 7, 4, 6, 8, 5, 3, 9], 
      [4, 0, 0, 0, 0, 0, 7, 2, 0], 
      [8, 6, 0, 9, 0, 1, 0, 5, 0], 
      [0, 0, 9, 0, 8, 0, 0, 0, 0], 
      [7, 2, 1, 6, 0, 5, 8, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 4, 0, 0, 6, 3, 0, 5], 
      [0, 0, 2, 8, 1, 0, 9, 0, 4]],
    
      solution:
      [[3, 9, 6, 5, 7, 2, 1, 4, 8], 
      [2, 1, 7, 4, 6, 8, 5, 3, 9], 
      [4, 8, 5, 1, 3, 9, 7, 2, 6], 
      [8, 6, 3, 9, 2, 1, 4, 5, 7], 
      [5, 4, 9, 3, 8, 7, 2, 6, 1], 
      [7, 2, 1, 6, 4, 5, 8, 9, 3], 
      [9, 3, 8, 7, 5, 4, 6, 1, 2], 
      [1, 7, 4, 2, 9, 6, 3, 8, 5], 
      [6, 5, 2, 8, 1, 3, 9, 7, 4]],
      
      difficulty:'Easy'
    
  }
  
    const mediumObject={
      difficulty: 'Medium', 

      solution: 
      [[1, 2, 6, 7, 3, 8, 9, 5, 4], 
      [7, 4, 9, 5, 6, 1, 2, 3, 8], 
      [8, 5, 3, 2, 4, 9, 1, 6, 7], 
      [6, 1, 4, 9, 8, 7, 3, 2, 5], 
      [3, 8, 2, 4, 5, 6, 7, 1, 9], 
      [5, 9, 7, 3, 1, 2, 4, 8, 6], 
      [2, 3, 5, 6, 7, 4, 8, 9, 1], 
      [4, 6, 8, 1, 9, 3, 5, 7, 2], 
      [9, 7, 1, 8, 2, 5, 6, 4, 3]], 

      value: 
      [[1, 0, 6, 0, 0, 0, 0, 5, 0], 
      [0, 4, 0, 5, 0, 0, 0, 0, 0], 
      [0, 0, 3, 0, 0, 9, 1, 6, 0], 
      [6, 0, 0, 9, 8, 7, 3, 2, 0], 
      [0, 0, 0, 4, 0, 6, 0, 0, 0], 
      [0, 9, 0, 0, 1, 2, 0, 8, 6], 
      [2, 3, 5, 6, 0, 0, 0, 9, 0], 
      [0, 0, 0, 0, 9, 0, 5, 0, 2], 
      [0, 7, 1, 8, 2, 5, 0, 0, 3]]}
  
  const hardObject={
    
    value: 
    [[0, 0, 9, 1, 0, 0, 8, 0, 5],
     [0, 0, 0, 0, 0, 0, 0, 7, 0], 
     [7, 0, 0, 6, 0, 5, 1, 0, 4], 
     [0, 0, 0, 2, 0, 0, 0, 0, 0], 
     [1, 0, 0, 0, 0, 0, 7, 0, 2], 
     [0, 0, 6, 0, 0, 0, 0, 0, 0], 
     [0, 9, 0, 0, 3, 0, 6, 0, 0], 
     [2, 0, 7, 0, 0, 0, 0, 0, 0], 
     [0, 0, 0, 4, 0, 7, 0, 0, 0]],
  
    solution:
    [[3, 4, 9, 1, 7, 2, 8, 6, 5], 
    [5, 6, 1, 3, 4, 8, 2, 7, 9], 
    [7, 8, 2, 6, 9, 5, 1, 3, 4], 
    [8, 7, 4, 2, 1, 3, 5, 9, 6], 
    [1, 3, 5, 8, 6, 9, 7, 4, 2], 
    [9, 2, 6, 7, 5, 4, 3, 1, 8], 
    [4, 9, 8, 5, 3, 1, 6, 2, 7], 
    [2, 1, 7, 9, 8, 6, 4, 5, 3], 
    [6, 5, 3, 4, 2, 7, 9, 8, 1]],
    
    difficulty:'Hard'
  }
  
    storeData(1,easyObject)
    storeData(2,mediumObject)
    storeData(3,hardObject)
    storeData(0,4)
    
  }
export default function Home({navigation}) {
  const {t, i18n} = useTranslation(); 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'Norsk', value: 'no'},
  ]);
  useEffect(() => {
    i18n.changeLanguage(value);
  }, [value]);

  
    SaveData()

    
    return(
        <>
        <View>

        <Button title={t('title.play-sudoku')}onPress={() => navigation.navigate('Sudoku')}/>
        <Button title={t('title.add-boards')} onPress={() => navigation.navigate('Add boards')}/>
        <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    dropdown:{
      marginTop:400
    }
  });