import { StyleSheet,Text, View,Pressable } from 'react-native';
import { useState,useEffect } from 'react';
import Board from './Board';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';


const storeData = async (id:number,value:any) => {
  try {
    console.log("saved")
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(id.toString(), jsonValue);
  } catch (e) {
    // saving error
  }
};


export default function SaveBoard() {

  const[count,setCount] = useState(0)
  const [currentBoard, setCurrentBoard] = useState([]);
  const[currentBoardData, setCurrentBoardData] = useState({});
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  const {t} = useTranslation(); 

    useEffect(() => {
        const fetchData = async () => {
          const json = await fetch('https://sudoku-api.vercel.app/api/dosuku')
          .then((response) =>{
            return response.json();
          }).then((error) => {
            return error
          })
          var boardData = json.newboard.grids[0]

          setCurrentBoard(boardData.value)
          setCurrentBoardData(boardData)
          setCurrentDifficulty(boardData.difficulty)

          console.log("value",boardData)
          //const keys = await AsyncStorage.getAllKeys();
          //const result = await AsyncStorage.multiGet(keys)
          //console.log("all",result)
          //console.log("count:",keys.length)
         
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
            
            <Pressable style={styles.button} onPress={async ()=>{
              const keys = await AsyncStorage.getAllKeys();
              keys.forEach((key)=>{
                if(parseInt(key) === count) return
              })
              storeData(count + 3, currentBoardData)

            }}>
              <Text>{t('save-board')}</Text>
              </Pressable>
              
              </View>
              {(count > 0) && <Text>{currentDifficulty}</Text> }    
        {count > 0 && <Board gridList={currentBoard} isEditable={false}/>}

       
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
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
 