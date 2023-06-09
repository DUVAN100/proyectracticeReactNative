import { StyleSheet, Text, TextInput,Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LogIn({navigation}){
    return(
      <View style={styles.container}>
        <Text style={{marginBottom:20}}>LOG IN</Text>

        <Button
          title="LOG IN"
          onPress={()=>{
            navigation.navigate('Products')
          }}
        />
      </View>
  
    );
  }