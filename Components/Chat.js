import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Time,
  SystemMessage,
  Day,
} from 'react-native-gifted-chat';

const firebase = require('firebase');
require('firebase/firestore');
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyAlz1WU7Znn9BRNqxkgi99qZlPsmv12qIU',
  authDomain: 'chat-a3c9d.firebaseapp.com',
  projectId: 'chat-a3c9d',
  storageBucket: 'chat-a3c9d.appspot.com',
  messagingSenderId: '882560066796',
  appId: '1:882560066796:web:f1085379e87e5b43a071c9',
};

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.refChatMsg = firebase.firestore().collection('messages');
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({
      title: name,
      headerStyle: this.props.bgcolor,
    });

    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
      this.setState({
        userId: user.userId,
        messages: [],
      });

      this.refChatUser = firebase.firestore().collection('messages');
      this.unsubscribeMsg = this.refChatUser.onSnapshot(
        this.onCollectionUpdate
      );
    });
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      messages.push({
        _id: doc.id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({ messages });
  };

  componentWillUnmount() {
    this.authUnsubscribe();
  }

  onSend(messages = []) {
    this.addmessage(messages[0]);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  addmessage = (message) => {
    message.id = message._id;
    this.refChatMsg.add(message);
  };

  renderBubble = (props) => {
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
            backgroundColor: '#bccad6',
            color: 'red',
          },
          left: {
            backgroundColor: '#f1e3dd',
          },
        }}
      />
    );
  };

  renderTime = (props) => {
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

  renderSystemMessage = (props) => {
    return <SystemMessage {...props} textStyle={{ color: '#667292' }} />;
  };

  renderDay = (props) => {
    return <Day {...props} textStyle={{ color: '#667292' }} />;
  };

  render() {
    let bgcolor = this.props.route.params.bgcolor;
    return (
      <View style={[styles.container, bgcolor]}>
        <GiftedChat
          renderUsernameOnMessage={true}
          renderDay={this.renderDay}
          renderSystemMessage={this.renderSystemMessage}
          renderBubble={this.renderBubble}
          renderTime={this.renderTime}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{ _id: this.state.userId, name: this.props.route.params.name }}
        />
        {Platform.OS === 'android' ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
