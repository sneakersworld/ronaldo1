/**
 * containers/ShoeItemPage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Colors from '../Colors';
import data from '../data/shoes';

class ShoeItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeData: {}
    }
  }

  fetchData() {
    const { navigation } = this.props;
    const sku = navigation.getParam('sku', '');
    const shoeData = data.find(d => d['sku'] === sku);
    this.setState({
      shoeData: shoeData
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <SafeAreaView style={ styles.screenContainer }>
        <View style={styles.container}>
          <Image style={styles.headerImage} source={{uri: this.state.shoeData.img}} />
          <Text>{this.state.shoeData.description}</Text>
          <Text>{this.state.shoeData.brand}</Text>
          <Text>{this.state.shoeData.sku}</Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  headerImage: {
    width: '100%',
    height: 200
  }
});

export default withNavigation(ShoeItemPage);
