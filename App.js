import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import MyAccount from './src/screens/MyAccount';
import Viewed from './src/screens/Viewed';
import Category from './src/screens/Category';

export default createBottomTabNavigator({
  Home,
  Category,
  Viewed,
  MyAccount
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home';
      } else if (routeName === 'Category') {
        iconName = 'ios-folder-open';
      } else if (routeName === 'Viewed') {
        iconName = 'ios-cart';
      } else if (routeName === 'MyAccount') {
        iconName = 'ios-contact';
      }
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={24} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#A9A9A9',
    style: {
			backgroundColor: '#E82E33',
		},
  },
});