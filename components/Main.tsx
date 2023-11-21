import { StyleSheet,Text, View,Pressable } from 'react-native';
import { useState,useEffect } from 'react';
import Board from './Board';
import AsyncStorage from '@react-native-async-storage/async-storage';



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
async function retrieveData(id:number){
  try {
    console.log("retrieved")
    const jsonValue = await AsyncStorage.getItem(id.toString());
    console.log("bom",jsonValue != null ? JSON.parse(jsonValue) : null)
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}
function SaveBoards(){

  clearAll()

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
      value: [[1, 0, 6, 0, 0, 0, 0, 5, 0], 
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
}

export default function Main() {

  const[count,setCount] = useState(0)
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState("");

    useEffect(()=>{
      SaveBoards()
    },[])

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
          setCurrentDifficulty(boardData.difficulty)

          console.log("value",boardData)
          const keys = await AsyncStorage.getAllKeys();
          const result = await AsyncStorage.multiGet(keys)
          console.log("all",result)
          console.log("count:",keys.length)
         
        };
    
        fetchData()
      
      }, [])
     

  return(
    <>
    <View style={styles.container}>
      
       {(count > 0) && <Text>{currentDifficulty}</Text> }    
        {count > 0 && <Board gridList={(currentBoard)}/>}

        <View style= {styles.container}>
          <Pressable style={styles.button} onPress={()=>setCount(count + 1)}>
            <Text>Generate easy board</Text>
            </Pressable>
            
            <Pressable style={styles.button} onPress={()=>storeData(count + 3, currentBoard)}>
              <Text>Save board</Text>
              </Pressable>
              <View style={styles.container}>

              <Pressable style={styles.button} onPress={ async ()=>{
                const newBoard = await getRandomBoard('Easy')
                setCurrentBoard(newBoard.value)
                setCurrentDifficulty(newBoard.difficulty)
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
                  setCount(count + 1)
                }
                }>
              <Text>Hard board</Text>
              </Pressable>
              </View>

              </View>
       
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

console.log("boardData: ",boardData)
boardData.forEach(element => {
  element.difficulty === difficulty ? BoardList.push(element) : ""
});
console.log("BoardList: ",BoardList)

const randomBoardIndex = Math.floor(Math.random() * BoardList.length);

console.log(randomBoardIndex)

console.log("newboard",BoardList[randomBoardIndex].value)
return BoardList[randomBoardIndex]

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
 