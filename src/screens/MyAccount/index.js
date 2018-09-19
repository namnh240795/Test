import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Header from './components/Header';
import Tabs from './components/Tabs';



class MyAccount extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Tabs />
      </View>
    );
  }
}

export default MyAccount;