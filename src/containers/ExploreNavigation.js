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
  ShoeItemPage: ShoeItemPage
})

export default ExploreNavigation;
