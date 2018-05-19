import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Event from '../../components/events/Event';

class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Event ${navigation.state.params.uid}`,
  });

  render() {
    return <Event />;
  }
}

export default EventScreen;
