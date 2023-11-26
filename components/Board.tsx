import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import SmallBoard from './SmallBoard';
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const checkAnswer = (setAnswerClicked:any,answerList:any,setSolved:any,solution:any)=>{
  setAnswerClicked(true)

  const answerListConverted = convertBoxToRow(answerList)
  
  setSolved(equals(solution, answerListConverted))
}
const convertBoxToRow = (answerList:any)=>{
  const answerListConverted = []
  for (let i = 0; i < 9; i += 3) {
    const row1 = answerList[i].slice(0, 3).concat(answerList[i + 1].slice(0, 3), answerList[i + 2].slice(0, 3));
    const row2 = answerList[i].slice(3, 6).concat(answerList[i + 1].slice(3, 6), answerList[i + 2].slice(3, 6));
    const row3 = answerList[i].slice(6, 9).concat(answerList[i + 1].slice(6, 9), answerList[i + 2].slice(6, 9));
  
    answerListConverted.push(row1, row2, row3);
  }
  return answerListConverted
}
const convertRowToBox = (board:any)=>{
  
  const groups = [];

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const group = [];
      
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          group.push(board[k][l]);
        }
      }
      groups.push(group);
    }
  }
  return groups
}

const equals = (a:number[][], b:number[][]) => JSON.stringify(a) === JSON.stringify(b);

export default function Board(props:any) {
  const [receivedList, setReceivedList] = useState([]);	
  const [solved, setSolved] = useState(false)
  const [answerClicked, setAnswerClicked] = useState(false)
  const [currentDifficulty,setCurrentDifficulty] = useState("")
  const {t} = useTranslation()

  const emptyList = 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0]]

  const [answerList] = useState(emptyList)
    
  const boardData = props.boardData
  const board = boardData.value

  useEffect(()=>{
    setAnswerClicked(false)
    const difficulty = props.boardData.difficulty
    setCurrentDifficulty(difficulty)
  },[props.boardData])
  

  const groups = convertRowToBox(board)

  const receiveNewList = (list,rowIndex) => {
    setReceivedList(list);	

    answerList[rowIndex] = list
    
    console.log('Received list in parent:', list);
  };


  return(
    <>
    <View style={styles.container}>
    {<Text style={styles.difficulty}>{t(`difficulty.${currentDifficulty}`)}</Text> }    
      <View style={styles.boardContainer}>
    {groups.map((item,index) => (
    <SmallBoard key = {index} gridGroup={item} isEditable={props.isEditable} oldList={item} index={index} sendListToParent={receiveNewList} board={board}/>
        ))}
        </View>
        <View>

    {props.isEditable &&
    <Button title={t("check-answer")} onPress={()=>{checkAnswer(setAnswerClicked,answerList,setSolved,props.boardData.solution)}} />
  }

  { (answerClicked && solved) &&
  <Text>{t("correct")}</Text>
  }
  { (answerClicked && !solved) &&
  <Text>{t("incorrect")}</Text>
  }
    {props.isEditable && <Text>{t('info')}</Text>}
    </View>

    </View>

    </>
  )
}

const styles = StyleSheet.create({
    boardContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height:250
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    difficulty:{
      fontSize:20
    }
  });