import { StyleSheet, TextInput,Text, View } from 'react-native';
import { useState,useEffect } from 'react';

export default function SmallBoard(props:any){

  const [newList] = useState([0,0,0,0,0,0,0,0,0])
  const [style,setStyle] = useState([{},{},{},{}, {}, {}, {}, {}, {}])
  const emptyStyleList = [{},{},{},{}, {}, {}, {}, {}, {}]
  const oldList = props.oldList

  const sendListToParent = () => {
  
    for(let i = 0; i < oldList.length; i++){
      if(newList[i] !== 0 && oldList[i] ===0){
        oldList[i] = newList[i]
      }
    }
    props.sendListToParent(oldList,props.index);
  };
  useEffect(()=>{
    setStyle(emptyStyleList)
  },[props.board])
    return(

        <View style={styles.container}>
          
             {props.gridGroup.map((item, index) => (
      <View style={styles.cell} key={index}>
        {(props.isEditable && item === 0) ? (
          <View style={style[index]}
          >
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            
            onKeyPress={(e)=>{
              const updatedStyleList = [...style]

              if(e.nativeEvent.key === "0"){
                updatedStyleList[index] = styles.mark
                setStyle(updatedStyleList)
                console.log(updatedStyleList)
              }else{
                updatedStyleList[index] = {}
                setStyle(updatedStyleList)
              }
            }}
          
            onChangeText={(val)=>{
              if(val !== ""){
                newList[index] = parseInt(val)
                sendListToParent()
              }
            
            }}
          />
          </View>
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
        width:'33.3%',
        height: '33.3%',
    },
    
    mark:{
      backgroundColor:'yellow',
      height:'100%'
    }
  });