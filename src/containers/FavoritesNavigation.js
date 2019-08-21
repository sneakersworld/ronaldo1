/**
 * containers/FavoritesNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createStackNavigator } from 'react-navigation';

import FavoritesPage from './FavoritesPage';

const FavoritesNavigation = createStackNavigator({
  FavoritesPage: {
    screen: FavoritesPage,
    navigationOptions: {
      header: null
    }
  },
})

export default FavoritesNavigation;
