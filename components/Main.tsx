import { StyleSheet,Text, View,Pressable } from 'react-native';
import { useState,useEffect } from 'react';
import Board from './Board';


export default function Main() {

  const[clicked,setClicked] = useState(false)

  const [isActive, setIsActive] = useState(false);

  
    const [currentBoard, setCurrentBoard] = useState([]);
    const [currentDifficulty, setCurrentDifficulty] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const json = await fetch('https://sudoku-api.vercel.app/api/dosuku')
          .then((response) =>{
            return response.json();
          }).then((error) => {
            return error
          })
          var board = json.newboard.grids[0].value
          const arr = Object.values(board);

          console.log(json.newboard.grids[0].value)
          setCurrentBoard(board)
          
          setCurrentDifficulty(json.newboard.grids[0].difficulty)
        };
    
        fetchData();
      }, []);
     

  return(
    <>
    <View>
      <View >
      {currentBoard.map((item,index) => (
              <Text  key={index} >{item.toString()}</Text>
        ))}
      </View>
        <Text>{currentDifficulty}</Text>    
        {clicked && <Board gridList={currentBoard}/>}
        <Text>{typeof currentBoard }</Text>

        <Pressable onPress={()=>setClicked(true)}>
  <Text>I'm pressable!</Text>
</Pressable>
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
    button: {
        width: '32%',
        borderColor: 'black',
        borderWidth: 1
    },
  });
 