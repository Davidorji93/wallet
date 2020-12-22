import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image} from 'react-native';

const Stack = createStackNavigator();



import Onboarding from './wallet/screens/Onboarding' ;
import Login from './wallet/screens/Login';
import Register from './wallet/screens/Register';
import Password from './wallet/screens/Password'


export default class App extends React.Component{

  render(){
    return (
      
      <NavigationContainer>
      <View style={{flex:1}}>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Onboarding" component={Onboarding} options={{title: 'Welcome', headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Log in', headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{title: 'Register',}} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{title: 'Dashboard',}} /> */}
       </Stack.Navigator> 
       </View>    
      </NavigationContainer>

    )
  
  }
}

