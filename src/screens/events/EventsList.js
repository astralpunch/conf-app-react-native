import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import EventList from '../../components/events/EventsList';

class EventListScreen extends Component {
  static navigationOptions = {
    title: 'Events List',
  };

  render() {
    return <EventList onEventPress={this.handleEventPress} />;
  }

  handleEventPress = uid => () => {
    this.props.navigation.navigate('event', { uid });
  };
}

export default EventListScreen;
