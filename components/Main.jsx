import { StyleSheet, TextInput,Text, View } from 'react-native';
import List from './SmallGrid';
import Grid from './Grid';

export default function Main() {

    const easyBoard =[
        [8, 2, 0, 9, 4, 0, 0, 0, 0],
        [0, 0, 4, 0, 0, 0, 0, 0, 1],
        [3, 7, 0, 0, 0, 8, 9, 0, 0],
        [0, 0, 0, 0, 0, 9, 1, 0, 0],    
        [3, 9, 0, 0, 0, 0, 0, 8, 6],
        [0, 0, 4, 2, 0, 0, 0, 0, 0],
        [0, 0, 4, 2, 0, 0, 0, 8, 3],
        [2, 0, 0, 0, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 6, 7, 0, 5, 2],
        ];
    const easyBoardSolution=[
        [8, 2, 6, 9, 4, 1, 3, 5, 7],
        [9, 5, 4, 7, 6, 3, 8, 2, 1],
        [3, 7, 1, 5, 2, 8, 9, 4, 6],
        [5, 7, 8, 4, 6, 9, 1, 3, 2],    
        [3, 9, 2, 5, 1, 7, 4, 8, 6],
        [6, 1, 4, 2, 8, 3, 7, 9, 5],
        [6, 1, 4, 2, 9, 5, 7, 8, 3],
        [2, 7, 5, 1, 3, 8, 6, 4, 9],
        [8, 3, 9, 4, 6, 7, 1, 5, 2],
        ];
    

    const mediumBoard = [
        [0, 8, 3, 0, 4, 0, 0, 0, 7],
        [0, 0, 4, 0, 0, 5, 2, 0, 0],
        [0, 0, 7, 0, 1, 0, 0, 9, 0],
        [0, 2, 0, 0, 0, 4, 0, 0, 0],    
        [0, 0, 0, 0, 1, 0, 0, 0, 6],
        [0, 3, 1, 8, 5, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 7, 0, 0],
        [0, 7, 0, 1, 0, 0, 6, 0, 9],
        [0, 0, 0, 4, 0, 3, 0, 0, 0],
        ];
    const mediumBoardSolution = [
        [1, 8, 3, 2, 4, 9, 5, 6, 7],
        [9, 6, 4, 7, 3, 5, 2, 8, 1],
        [5, 2, 7, 6, 1, 8, 3, 9, 4],
        [8, 2, 6, 9, 7, 4, 3, 5, 1],    
        [4, 5, 7, 3, 1, 2, 8, 9, 6],
        [9, 3, 1, 8, 5, 6, 7, 4, 2],
        [4, 1, 8, 6, 9, 5, 7, 3, 2],
        [5, 7, 3, 1, 2, 8, 6, 4, 9],
        [2, 6, 9, 4, 7, 3, 1, 8, 5],
        ];
        const hardBoard = [
        [0, 5, 0, 3, 0, 0, 4, 8, 0],
        [3, 0, 1, 0, 0, 5, 0, 0, 0],
        [2, 0, 0, 0, 1, 0, 0, 0, 0],
        [9, 0, 0, 0, 0, 7, 0, 0, 0],    
        [5, 0, 4, 1, 0, 6, 7, 0, 8],
        [0, 0, 0, 9, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 1, 0, 0, 0, 8],
        [0, 0, 0, 8, 0, 0, 4, 0, 3],
        [0, 9, 8, 0, 0, 4, 0, 5, 0],
        ];
    const hardBoardSolution = [
        [6, 5, 9, 3, 7, 2, 4, 8, 1],
        [3, 4, 1, 6, 8, 5, 9, 7, 2],
        [2, 8, 7, 4, 1, 9, 5, 6, 3],
        [9, 6, 3, 8, 2, 7, 1, 4, 5],    
        [5, 2, 4, 1, 3, 6, 7, 9, 8],
        [8, 7, 1, 9, 4, 5, 6, 3, 2],
        [5, 3, 4, 7, 1, 6, 2, 9, 8],
        [2, 6, 7, 8, 5, 9, 4, 1, 3],
        [1, 9, 8, 3, 2, 4, 7, 5, 6],
        ];

  return(
    <>
    <Grid gridList={hardBoard}/>
    <Grid gridList={hardBoardSolution}/>

    </>
  )
}