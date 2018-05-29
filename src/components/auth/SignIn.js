import React, { Component } from 'react';
import firebase from 'firebase';
import { observer, inject } from 'mobx-react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

@inject('user')
@observer
class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;

    return (
      <View>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={this.setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={this.setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signIn = () => {
    const { user } = this.props;

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(userEntity => {
        user.userData = userEntity;

        this.props.navigation.navigate('eventList');
      })
      .catch(err => console.error(err));
  };

  setPassword = password => (this.props.user.password = password);

  setEmail = email => (this.props.user.email = email);
}

const styles = {
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
      },
      android: {},
    }),
  },
};

export default SignIn;
