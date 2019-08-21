/**
 * containers/ProfileNavigation.js
 *
 * @format
 * @flow
 */

'use strict';

import { createStackNavigator } from 'react-navigation';

import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';
import SettingsPage from './SettingsPage';
import FeedbackPage from './FeedbackPage';
import HelpPage from './HelpPage';

const ProfileNavigation = createStackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      header: null
    }
  },
  EditProfilePage: EditProfilePage,
  SettingsPage: SettingsPage,
  FeedbackPage: FeedbackPage,
  HelpPage: HelpPage
})

export default ProfileNavigation;
