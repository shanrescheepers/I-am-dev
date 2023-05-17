import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Welcomescreen from './screens/welcomeScreen';
import Screen1 from './screens/screenOne';
import Screen2 from './screens/screenTwo';
import Screen3 from './screens/screenThree';
import CongratsScreen from './screens/congratulationsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={Welcomescreen} options={{ headerShown: false }} />
      <Stack.Screen name="Line1" component={Screen1} options={{ headerBackTitle: 'undo' }} />
      <Stack.Screen name="Line2" component={Screen2} options={{ headerBackTitle: 'undo' }} />
      <Stack.Screen name="Line3" component={Screen3} options={{ headerBackTitle: 'undo' }} />
      <Stack.Screen name="CongratulationsScreen" component={CongratsScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>

      <MyStack />

    </NavigationContainer>


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
