import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function SmallGrid({gridIndex, gridList}) {

  return(
   
        <View style {...styles.container} >
            {gridList[gridIndex].map((item,index) => (
                <TextInput style={styles.cell} key={index} value={item.toString()}  />
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