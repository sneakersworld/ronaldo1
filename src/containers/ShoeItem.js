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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.shoeItemContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ShoeItemPage', {
              sku: this.props.sku
            })
          }}
          accessibilityRole={'button'}
          style={{flex: 1}}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{uri: this.props.uri}}
              style={styles.image}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.descriptionContainer}>{this.props.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  shoeItemContainer: {
    flex: 1,
    height: 130,
    width: 130,
    backgroundColor: 'white',
    marginRight: 3
  },
  imageContainer: {
    flex: 2, 
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  descriptionContainer: {
    flex: 1,
    textAlign: 'center'
  }
});

export default withNavigation(ShoeItem);
