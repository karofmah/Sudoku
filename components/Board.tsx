import { StyleSheet, TextInput,Text, View } from 'react-native';
import SmallBoard from './SmallBoard';


export default function Board({gridList}: any) {

  const sudokuGroups = [];

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const group = [];
      
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          group.push(gridList[k][l]);
        }
      }
      
      sudokuGroups.push(group);
    }
  }

  return(
    <>
    <View style={styles.container}>
    {sudokuGroups.map((item,index) => (
    <SmallBoard key = {index} gridGroup={item}/>
        ))}
      
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

  
  });