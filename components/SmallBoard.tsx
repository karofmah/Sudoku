import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function SmallBoard({gridGroup}: any){


    return(

        <View style={styles.container}>
             {gridGroup.map((item, index) => (
      <View style={styles.cell} key={index}>
        {item == 0 ? (
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
          />
        ) : (
          <Text >{item.toString()}</Text>
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