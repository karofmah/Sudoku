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