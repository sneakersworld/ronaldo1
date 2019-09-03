/**
 * containers/ShoeItem.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import Colors from '../Colors'
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
          <Text style={styles.text}>{this.props.brand}</Text>
          <Text style={styles.text}>{this.props.description}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  shoeItem: {
    backgroundColor: Colors.white,
    padding: 15,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 3,
    flex:0.5
  },
  sizes: {
    flexDirection: 'row'
  },
  text: {
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    height: 100,
  }
});

export default withNavigation(ShoeItem);
