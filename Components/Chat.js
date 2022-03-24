import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Chat({ navigation, route }) {
  useEffect(() => {
    let name = route.params.name;
    navigation.setOptions({
      title: name,
      headerStyle: bgcolor,
    });
  });
  let bgcolor = route.params.bgcolor;
  return (
    <View style={[styles.container, bgcolor]}>
      <Text>Chat! </Text>
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
