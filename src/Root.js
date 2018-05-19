import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import EventsList from './components/events/EventsList';
import SignIn from './components/auth/SignIn';

class Root extends Component {
  render() {
    return (
      <View>
        <Text>Conference app</Text>
        {/* <SignIn /> */}
        <EventsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 30,
    marginTop: 15,
  },
});

export default Root;
