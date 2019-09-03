/**
 * containers/ExplorePage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TpouchableOpacity, View } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import sampleData from '../data/shoes';

class ExplorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
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
  filters = ["Most Popular", "Most Recent", "Cheapest", "Men", "Women"];

  renderFilter = (item) => {
    return (
        <View style={styles.filterItem}>
          <Text>{item.item}</Text>
        </View>
      );
  }

  updateSearch = (search) => this.setState({search});

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.container}>
          <SearchBar 
            placeholder="Search" 
            onChangeText={this.updateSearch} 
            value={this.state.search} 
            inputContainerStyle={styles.searchBarInner} 
            inputStyle={styles.searchBarInner} 
            containerStyle={styles.searchBarOuter}
          />

          <FlatList 
            horizional
            data={this.filters} 
            renderItem={this.renderFilter}
            keyExtractor={(item, index) => index.toString()}
            style={styles.filterlist}
          />

          <FlatList 
            style={styles.list}
            data={sampleData}
            renderItem={this._renderItem} 
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
    marginTop: 0,
    paddingHorizontal: 0,
    backgroundColor: Colors.lighter
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },

  searchBarInner: {
    backgroundColor: Colors.white,
    marginHorizontal: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  searchBarOuter: {
    backgroundColor: Colors.lighter,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  filterlist: {
    marginHorizontal: 10
  },

  filterItem: {
    padding: 3,
    backgroundColor: 'white',
    width: 100,
    alignItems: 'center'
  }
});

export default ExplorePage;
