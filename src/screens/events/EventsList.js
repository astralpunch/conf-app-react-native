import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import firebase from 'firebase';

import EventList from '../../components/events/EventsList';

@inject('events')
@observer
class EventListScreen extends Component {
  static navigationOptions = {
    title: 'Events List',
  };

  componentDidMount() {
    this.props.events.loadAll();
  }

  render() {
    const { events } = this.props;

    if (events.loading) return this.getLoader();

    return <EventList events={events.list} onEventPress={this.handleEventPress} />;
  }

  getLoader() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  handleEventPress = uid => () => {
    this.props.navigation.navigate('event', { uid });
  };
}

export default EventListScreen;
