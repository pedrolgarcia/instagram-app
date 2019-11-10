import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

const AppNavigator = createStackNavigator({
    Feed: Feed,
    New: New,
}, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerBackTitle: null,
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
    },
    mode: 'modal',
  },
);
  
export default createAppContainer(AppNavigator);