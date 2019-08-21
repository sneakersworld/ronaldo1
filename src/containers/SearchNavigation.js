/**
 * containers/SearchNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createStackNavigator } from 'react-navigation';

import SearchPage from './SearchPage';

const SearchNavigation = createStackNavigator({
  SearchPage: {
    screen: SearchPage,
    navigationOptions: {
      header: null
    }
  },
})

export default SearchNavigation;
