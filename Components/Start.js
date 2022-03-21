import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [name, setUserName] = useState('');

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput placeholder="Enter Username" onChange={(e) => setUserName} />
      <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate('Chat', { name: name });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
