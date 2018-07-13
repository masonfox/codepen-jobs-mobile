import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text>Woot</Text>
        <Button onPress={() => navigate('Test')} title="Test Navigate" />
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
