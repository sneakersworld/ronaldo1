/**
 * containers/TabNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import ExploreNavigation from './ExploreNavigation';
import SearchNavigation from './SearchNavigation';
import FavoritesNavigation from './FavoritesNavigation';
import ProfileNavigation from './ProfileNavigation';
import Colors from '../Colors';

const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: ExploreNavigation,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} />
      }
    },
    Search: {
      screen: SearchNavigation,
      navigationOptions: {
        tabBarLabel: 'SEARCH',
        tabBarIcon: ({ tintColor }) => <Icon name='search' color={tintColor} />
      }
    },
    Sell: {
      screen: SearchNavigation,
      navigationOptions: {
        tabBarLabel: 'SELL',
        tabBarIcon: ({ tintColor }) => <Icon name='camera-alt' color={tintColor} />
      }
    },
    Liked: {
      screen: FavoritesNavigation,
      navigationOptions: {
        tabBarLabel: 'LIKED',
        tabBarIcon: ({ tintColor }) => <Icon name='favorite-border' color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileNavigation,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => <Icon name='person' color={tintColor} />
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.dark,
      inactiveTintColor: Colors.light,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5 // android
      }
    }
  }
);

export default TabNavigation;
