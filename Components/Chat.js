import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Chat({ navigation, route }) {
  let name = route.params.name;
  navigation.setOptions({ title: name });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
