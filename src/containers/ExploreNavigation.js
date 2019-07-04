/**
 * containers/ExploreNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createStackNavigator } from 'react-navigation';

import ExplorePage from './ExplorePage';

const ExploreNavigation = createStackNavigator({
  ExplorePage: ExplorePage
})

export default ExploreNavigation;
