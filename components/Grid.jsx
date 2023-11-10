import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import SmallGrid from './SmallGrid';

export default function Grid({gridList}) {

    const list = []
    for(let i = 0; i < 9; i++) {
        list.push(
        <SmallGrid 
        key={i}
        gridIndex={i} 
        gridList={gridList} 
        />)
    }
  
  return(
    <>
    <View style={styles.container}>
      {list.map((item,index) => (
        item
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
    width: '100%'
  },
});