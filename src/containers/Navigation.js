/**
 * containers/Navigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginPage from './LoginPage.js';
import TabNavigation from './TabNavigation.js';

const Navigation = createSwitchNavigator({
  // LoginPage: { screen: LoginPage },
  TabNavigation: { screen: TabNavigation }
});

export default createAppContainer(Navigation);
