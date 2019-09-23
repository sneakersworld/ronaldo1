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

import { Icon } from 'react-native-elements';

class ShoeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
  }

  handleFavoriteOnPress = () => {
    this.setState((state) => ({
      isFavorite: !state.isFavorite
    }));
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ShoeItemPage', {
            sku: this.props.sku,
            description: this.props.description
          })
        }}
        accessibilityRole={'button'}
        style={{flex: 1}}
      >
        <TouchableOpacity
          onPress={this.handleFavoriteOnPress}
          accessibilityRole={'button'}
          style={{alignSelf: 'flex-end'}}
        >
          <Icon name={this.state.isFavorite ? 'favorite' : 'favorite-border'} size={20} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: this.props.uri}}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    textAlign: 'center'
  }
});

export default withNavigation(ShoeItem);
