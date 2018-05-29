import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../common/Card';

class PersonCard extends Component {
  render() {
    return (
      <Card>
        <View style={styles.description}>
          <Text>{this.props.person.firstName}</Text>
          <Text>{this.props.person.lastName}</Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({});

export default PersonCard;
