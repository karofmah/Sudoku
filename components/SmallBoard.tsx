import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function SmallBoard(props:any){
  const newList = ["0","0","0","0","0","0","0","0","0"]

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
                newList[index] = val
                console.log(newList)
                console.log(newList.length)
                console.log("index",index)
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