import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function SmallGrid({gridIndex, gridList}) {

  return(
   
        <View style {...styles.container} >
            {gridList[gridIndex].map((item,index) => (
              item == 0 ? 
              <TextInput style={styles.cell} key={index} keyboardType="number-pad" maxLength={1} /> : 
              <Text style={styles.cell} key={index} >{item.toString()}</Text>
        ))}
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '33%',
      marginTop: 10 

    },
    cell: {
        width: '32%',
        borderColor: 'black',
        borderWidth: 1

    },
   
  });