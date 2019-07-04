/**
 * containers/ProfilePageLinks.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

import Colors from '../Colors';

const links = [
  {
    title: 'Settings',
    link: 'SettingsPage',
    icon: 'settings'
  },
  {
    title: 'Give us feedback',
    link: 'FeedbackPage',
    icon: 'feedback'
  },
  {
    title: 'Get help',
    link: 'HelpPage',
    icon: 'help'
  },
];

class ProfilePageLinks extends Component {
  render() {
    return (
      <View style={styles.container}>
        {links.map((item, index) => {
          return (
            <Fragment key={index}>
              <View style={styles.separator} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.link)}
                accessibilityRole={'button'}
                style={styles.linkContainer}
              >
                <Text style={styles.link}>{item.title}</Text>
                <Icon style={styles.icon} name={item.icon} />
              </TouchableOpacity>
            </Fragment>
          );
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  link: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400'
  },
  icon: {
    flex: 1,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default withNavigation(ProfilePageLinks);
