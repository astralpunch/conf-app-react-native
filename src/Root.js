import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

class Root extends Component {
  render() {
    return (
      <View>
        <Text>Conference app</Text>
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
