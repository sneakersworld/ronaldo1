/**
 * containers/ExploreNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createStackNavigator } from 'react-navigation';

import ExplorePage from './ExplorePage';
import ShoeItemPage from './ShoeItemPage';

const ExploreNavigation = createStackNavigator({
  ExplorePage: {
    screen: ExplorePage,
    navigationOptions: {
      header: null
    }
  },
  ShoeItemPage: {
    screen: ShoeItemPage,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
})

export default ExploreNavigation;
