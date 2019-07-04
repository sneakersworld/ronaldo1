/**
 * containers/HomePage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

class ExplorePage extends Component {
  render() {
    return (
      <View style={styles.container}></View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ExplorePage;
