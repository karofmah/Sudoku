import { StyleSheet,Text, View,Pressable } from 'react-native';
import { useState,useEffect } from 'react';
import Board from './Board';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';


const storeData = async (id:number,value:any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(id.toString(), jsonValue);
  } catch (e) {
    console.log(e)
    }
};
const onSaveBoard = async (count: number,currentBoardData:any,setSaved:any)=>{
  const keys = await AsyncStorage.getAllKeys();
  keys.forEach((key)=>{
    if(parseInt(key) === count) return
  })
  storeData(count + 3, currentBoardData)
  setSaved(true)
  const newkeys = await AsyncStorage.getAllKeys();
const result = await AsyncStorage.multiGet(newkeys)
console.log("all",result)
console.log("count:",newkeys.length)
}

export default function SaveBoard() {

  const[count,setCount] = useState(0)
  const[currentBoardData, setCurrentBoardData] = useState({});
  const [saved,setSaved] = useState(false)
  const {t} = useTranslation(); 

    useEffect(() => {
        const fetchData = async () => {
          const json = await fetch('https://sudoku-api.vercel.app/api/dosuku')
          .then((response) =>{
            return response.json();
          }).then((error) => {
            return error
          })
          console.log("json" + json)

          var boardData = json.newboard.grids[0]
          
          setCurrentBoardData(boardData)

          console.log("value",boardData)

          setSaved(false)
         
        };
    
        fetchData()
      
      }, [count])
     

  return(
    <>
    <View style={styles.container}>
      
        <View style= {styles.container}>
          <Pressable style={styles.button} onPress={()=>setCount(count + 1)}>
            <Text>{t('generate-board')}</Text>
            </Pressable>
            
            <Pressable style={styles.button} onPress={()=>{onSaveBoard(count,currentBoardData,setSaved)
            }}>
              <Text>{t('save-board')}</Text>
              </Pressable>
              
              </View>
        {(count > 0 && !(Object.keys(currentBoardData).length === 0)) && <Board isEditable={false} boardData = {currentBoardData}/>}
        {(count > 0 && saved) && <Text>{t("saved")}</Text>}
       
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 50
      
    },
    button: {
        borderColor: 'black',
        borderWidth: 1,
        margin:20,
        width:120
    },
  });
 