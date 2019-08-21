/**
 * containers/ShoeItem.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';

class ShoeItem extends Component {
  render() {
    return (
      <View style={ styles.shoeItem }>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ShoeItemPage', {
              sku: this.props.sku
            })
          }}
          accessibilityRole={'button'}
        >
          <Image style={styles.thumbnail} source={{uri: this.props.uri}} />
          <Text>{this.props.brand}</Text>
          <Text>{this.props.description}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  shoeItem: {
    padding: 20,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 3
  },
  sizes: {
    flexDirection: 'row'
  },
  sizeText: {
    marginRight: 5
  },
  thumbnail: {
    width: '100%',
    height: 100
  }
});

export default withNavigation(ShoeItem);
