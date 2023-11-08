import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function App() {

    const list = []
    for(let i = 0; i < 81; i++) {
        list.push(i)
    }

  return(
    <View>
        <View className="flex flex-row flex-wrap mt-12">
            {list.map((item) => (
                <TextInput className="mx-1 my-1 px-1 py-1 bg-gray-200" style={{width: '9%', borderColor: 'black',borderWidth:1} } key={item}> </TextInput>
        ))}
        
        </View>
    </View>
  )
}
