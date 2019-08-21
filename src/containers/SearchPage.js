/**
 * containers/SearchPage.js
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

class SearchPage extends Component {
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
  },
  searchBarContainer: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  searchBarInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    height: 20
  },
  searchBarIcon: {
    position: 'absolute',
    top: 11,
    left: 12
  },
  searchBarClearIcon: {
    position: 'absolute',
    top: 11,
  },
});

export default SearchPage;
