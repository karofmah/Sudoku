import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import SmallBoard from './SmallBoard';
import { useState,useEffect } from 'react';


export default function Board(props:any) {
  const [receivedList, setReceivedList] = useState([]);
  const [solved, setSolved] = useState(false)
  const [answerClicked, setAnswerClicked] = useState(false)

  
  const [answerList] = useState(
    [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0]])

  const receiveNewList = (list,rowIndex) => {
    setReceivedList(list);

    answerList[rowIndex] = list
    
    console.log('Received list in parent:', list);
  };

  const sudokuGroups = [];

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const group = [];
      
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          group.push(props.gridList[k][l]);
        }
      }
      sudokuGroups.push(group);
    }
  }

  return(
    <>
    <View style={styles.container}>
    {sudokuGroups.map((item,index) => (
    <SmallBoard key = {index} gridGroup={item} isEditable={props.isEditable} oldList={item} index={index} sendListToParent={receiveNewList}/>
        ))}
      
    </View>
    {props.isEditable &&
    <Button title="Check Answer" onPress={()=>{
      setAnswerClicked(true)
      const answerListConverted = []
      for (let i = 0; i < 9; i += 3) {
        const row1 = answerList[i].slice(0, 3).concat(answerList[i + 1].slice(0, 3), answerList[i + 2].slice(0, 3));
        const row2 = answerList[i].slice(3, 6).concat(answerList[i + 1].slice(3, 6), answerList[i + 2].slice(3, 6));
        const row3 = answerList[i].slice(6, 9).concat(answerList[i + 1].slice(6, 9), answerList[i + 2].slice(6, 9));
      
        answerListConverted.push(row1, row2, row3);
      }
      

      //setSolved(equals(props.boardData.solution, answerListConverted))
      const solution=
      [[3, 9, 6, 5, 7, 2, 1, 4, 8], 
      [2, 1, 7, 4, 6, 8, 5, 3, 9], 
      [4, 8, 5, 1, 3, 9, 7, 2, 6], 
      [8, 6, 3, 9, 2, 1, 4, 5, 7], 
      [5, 4, 9, 3, 8, 7, 2, 6, 1], 
      [7, 2, 1, 6, 4, 5, 8, 9, 3], 
      [9, 3, 8, 7, 5, 4, 6, 1, 2], 
      [1, 7, 4, 2, 9, 6, 3, 8, 5], 
      [6, 5, 2, 8, 1, 3, 9, 7, 4]]
      

      setSolved(equals(props.boardData.solution,solution))
      console.log(equals(props.boardData.solution,solution))
      console.log(solved)

      console.log(answerListConverted)
      console.log("before conversion",answerList)

      console.log(props.boardData.solution)
    }} />
  }
  { (answerClicked && solved) &&
  <Text>Congratulations, your answer is correct!</Text>
  }
  { (answerClicked && !solved) &&
  <Text>Unfortunately your answer is incorrect</Text>
  }
    </>
  )
}
const equals = (a:number[][], b:number[][]) => JSON.stringify(a) === JSON.stringify(b);

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });