import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Screen1!</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
