import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { GiftedChat, Bubble, Time } from 'react-native-gifted-chat';

export default function Chat({ navigation, route }) {
  const [messages, setMessages] = useState([]);

  let bgcolor = route.params.bgcolor;
  useEffect(() => {
    let name = route.params.name;
    navigation.setOptions({
      title: name,
      headerStyle: bgcolor,
    });

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'This is a system message',
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'black',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#cfe0e8',
            color: 'red',
          },
          left: {
            backgroundColor: '#b7d7e8',
          },
        }}
      />
    );
  };

  const renderTime = (props) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          right: {
            color: '#667292',
          },
          left: {
            color: '#667292',
          },
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <GiftedChat
        renderBubble={renderBubble}
        renderTime={renderTime}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
