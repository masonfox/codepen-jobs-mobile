import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test Screen'
  }
  
  goHome() {
    this.props.navigation.goBack()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to my Test Screen! Blah!</Text>
        <Button onPress={this.goHome.bind(this)} title="Go Back" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
