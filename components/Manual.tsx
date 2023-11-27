
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput,Text, View,Button } from 'react-native';

export default function Manual({navigation}) {
    
    const {t} = useTranslation(); 

      return(
          <>
          <View>
            <Text style={styles.text}>
                {t('manual-one')}
                </Text>    
                <Text style={styles.text}>
                {t('manual-two')}
                </Text> 
                <Text style={styles.text}>
                {t('manual-three')}
                </Text>    
                <Text style={styles.text}>
                {t('manual-four')}
                </Text>    
            </View>
  
          </>
      )
  }
  const styles = StyleSheet.create({
      text: {
        marginTop:10
      },
      
    });