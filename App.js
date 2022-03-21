import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const [text, setText] = useState('');
  const Stack = createStackNavigator();

  const alertMyText = (input = []) => {
    Alert.alert(input.text);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderWidth: 1,
  },
  innerContainer: {
    width: 300,
  },
});
