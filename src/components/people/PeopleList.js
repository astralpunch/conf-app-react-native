import React, { Component } from 'react';
import { groupBy } from 'lodash';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import PersonCard from './PersonCard';

class PeopleList extends Component {
  render() {
    return (
      <View>
        <FlatList data={this.props.people} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) => (
    // <TouchableOpacity onPress={this.props.onEventPress(item.key)}>
    <PersonCard person={item} />
  );
  // </TouchableOpacity>
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F0F0F0',
    height: 40,
    lineHeight: 40,
    marginBottom: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },
});

export default PeopleList;
