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
import FavoritesPage from './FavoritesPage';
import ProfileNavigation from './ProfileNavigation';
import SamplePage from '../SamplePage';
import Colors from '../Colors';

const TabNavigation = createBottomTabNavigator(
  {
    EXPLORE: {
      screen: ExploreNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='explore' color={tintColor} />
      }
    },
    SEARCH: {
      screen: SearchNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='search' color={tintColor} />
      }
    },
    FAVORITES: {
      screen: FavoritesPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='favorite' color={tintColor} />
      }
    },
    PROFILE: {
      screen: ProfileNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='person' color={tintColor} />
      }
    },
    SAMPLE: {
      screen: SamplePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='public' color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.dark,
      inactiveTintColor: Colors.light
    }
  }
);

export default TabNavigation;
