import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [name, setUserName] = useState('');
  const [bgcolor, setBackGroundColor] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/Background-Image.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.loginCard}>
          <Text style={styles.my1}>Login</Text>
          <TextInput
            style={[styles.my1, styles.loginInput]}
            placeholder="Enter Username"
            onChangeText={(e) => setUserName(e)}
          />
          <Button
            title="Go to Chat"
            onPress={() => {
              navigation.navigate('Chat', { name: name, bgcolor: bgcolor });
            }}
            value={name}
            style={[styles.my1, styles.color3]}
          />
          <View style={[styles.cyrcleContainer, styles.my1]}>
            <TouchableOpacity
              onPress={() => {
                setBackGroundColor(styles.color1);
              }}
              style={[styles.cyrcle, styles.color1]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBackGroundColor(styles.color2);
              }}
              style={[styles.cyrcle, styles.color2]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBackGroundColor(styles.color3);
              }}
              style={[styles.cyrcle, styles.color3]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBackGroundColor(styles.color4);
              }}
              style={[styles.cyrcle, styles.color4]}
            ></TouchableOpacity>
          </View>
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
    alignItems: 'center',
  },
  loginCard: {
    backgroundColor: 'white',
    width: '70%',
    padding: 15,
    borderRadius: 13,
  },
  cyrcleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cyrcle: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 5,
    borderColor: '#667292',
    borderWidth: 4,
  },
  my1: {
    marginTop: 10,
    marginBottom: 10,
  },
  loginInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  color1: {
    backgroundColor: '#cfe0e8',
  },
  color2: {
    backgroundColor: '#b7d7e8',
  },
  color3: {
    backgroundColor: '#87bdd8',
  },
  color4: {
    backgroundColor: '#daebe8',
  },
});
