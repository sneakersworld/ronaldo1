/**
 * containers/ExplorePage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import sampleData from '../data/shoes';

class ExplorePage extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => (
    <ShoeItem
      key={item.id}
      brand={item.brand}
      description={item.description}
      sku={item.sku}
      uri={item.img}
    />
  )

  _keyExtractor = _ => _.sku.toString();

  renderHeader = () => {
    return <Text style={styles.title}>Trending Shoes</Text>;
  }

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.container}>
          <FlatList
            data={sampleData}
            renderItem={this._renderItem}
            ListHeaderComponent={this.renderHeader}
            numColumns={2}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default ExplorePage;
