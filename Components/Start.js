import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [name, setUserName] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={(require = 'img/Background-Image.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.loginCard}>
          <Text>Home</Text>
          <TextInput
            placeholder="Enter Username"
            onChangeText={(e) => setUserName(e)}
          />
          <Button
            title="Go to Chat"
            onPress={() => {
              navigation.navigate('Chat', { name: name });
            }}
            value={name}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  loginCard: {
    backgroundColor: 'red',
  },
});
