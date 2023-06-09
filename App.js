import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';


const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen name='Login' component={LogIn} options={{title:'Log in'}}/>
        <Stack.Screen name="Home" component={''} options={{title:'Inicio'}}/>
        <Stack.Screen name='Contacts' component={''} options={{title:'Contactenos'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LogIn({navigation}){
  return(
    <View style={styles.container}>
        <TextInput
          label="user"
          value={user}
          onChangeText={text => setUser(text)}
        />
        <TextInput
          label="password"
          value={pasword}
          onChangeText={text => setPassword(text)}
        />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
         Press me
    </Button>
      <Button
        title="go to the products"
        onPress={()=>{
          navigation.navigate('Products')
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
