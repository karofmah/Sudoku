import { StyleSheet, TextInput,Text, View } from 'react-native';
import { useState,useEffect } from 'react';

export default function SmallBoard(props:any){
  const [newList] = useState([0,0,0,0,0,0,0,0,0])

  const oldList = props.oldList

  const sendListToParent = () => {
  console.log("oldold",oldList)
  
    for(let i = 0; i < oldList.length; i++){
      if(newList[i] !== 0 && oldList[i] ===0){
        oldList[i] = newList[i]

      }
    }
    props.sendListToParent(oldList,props.index);
  };

    return(

        <View style={styles.container}>
             {props.gridGroup.map((item, index) => (
      <View style={styles.cell} key={index}>
        {(props.isEditable && item === 0) ? (
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(val)=>{
              if(val !== ""){
                newList[index] = parseInt(val)
                console.log("new",newList)
                console.log("old",oldList)
                console.log(newList.length)
                console.log("index",index)
                sendListToParent()
              }
            }}
          />
        ) : (
          <Text >{item !==0 && item.toString()}</Text>
        )}
      </View>
    ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRightWidth:2,
      borderBottomWidth:2,
      width: '33.3%',
      height: '33.3%'

    },
    cell: {
        borderColor: 'black',
        borderWidth: 1,
        justifyContent:'center',
        width:'33.3%'
    },
  });