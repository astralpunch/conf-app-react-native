import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import firebase from 'firebase';

import PeopleList from '../../components/people/PeopleList';

@inject('people')
@observer
class PeopleListScreen extends Component {
  static navigationOptions = {
    title: 'People List',
  };

  componentDidMount() {
    this.props.people.loadAll();
  }

  render() {
    const { people } = this.props;

    if (people.loading) return this.getLoader();

    return <PeopleList people={people.list} onPersonPress={this.handlePersonPress} />;
  }

  getLoader() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  handlePersonPress = uid => () => {
    // this.props.navigation.navigate('event', { uid });
  };
}

export default PeopleListScreen;
