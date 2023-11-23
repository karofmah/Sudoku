import { StyleSheet, TextInput,Text, View,Pressable } from 'react-native';
import SmallBoard from './SmallBoard';
import Board from './Board';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';


export default function Sudoku() {
  const[count,setCount] = useState(0)
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  const[currentBoardData, setCurrentBoardData] = useState({});

  return(
    <>
    <View style={styles.container}>
        <View style= {styles.container}>

              <Pressable style={styles.button} onPress={ async ()=>{
                const newBoard = await getRandomBoard('Easy')
                setCurrentBoard(newBoard.value)
                setCurrentDifficulty(newBoard.difficulty)
                setCurrentBoardData(newBoard)
                setCount(count + 1)
              }
              }>
              <Text>Easy board</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={async ()=>
                {
                  const newBoard = await getRandomBoard('Medium')
                  setCurrentBoard(newBoard.value)
                  setCurrentDifficulty(newBoard.difficulty)
                  setCurrentBoardData(newBoard)
                  setCount(count + 1)
                }
                }>
              <Text>Medium board</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={async ()=>
                {
                  const newBoard = await getRandomBoard('Hard')
                  setCurrentBoard(newBoard.value)
                  setCurrentDifficulty(newBoard.difficulty)
                  setCurrentBoardData(newBoard)
                  setCount(count + 1)
                }
                }>
              <Text>Hard board</Text>
              </Pressable>
              </View>
        {(count > 0) && <Text>{currentDifficulty}</Text> }    
        {count > 0 && <Board gridList={currentBoard} isEditable={true} boardData={currentBoardData} />}
              </View>
        
    </>
  )
}
async function getRandomBoard(difficulty: string){

  const keys = await AsyncStorage.getAllKeys();
  const boardDataString = await AsyncStorage.multiGet(keys)
  const boardData = []
  const BoardList = []
  
  boardDataString.forEach(element => {
    boardData.push(JSON.parse(element[1]))
  });
  
  boardData.forEach(element => {
    element.difficulty === difficulty ? BoardList.push(element) : ""
  });
  
  const randomBoardIndex = Math.floor(Math.random() * BoardList.length);
  
  
  return BoardList[randomBoardIndex]
  
  }
  
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: 'black',
      borderWidth: 1,
      margin:20,
      width:100
    },
  });