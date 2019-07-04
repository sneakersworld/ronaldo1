/**
 * containers/FeedbackPage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class FeedbackPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Feedback</Text>
      </View>
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

export default FeedbackPage;
