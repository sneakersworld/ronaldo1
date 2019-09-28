/**
 * containers/ExplorePage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component, Fragment } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SearchBar, Icon, Card } from 'react-native-elements';

import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import sampleData from '../data/shoes';


class ExplorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  filters = ["Most Popular", "Most Recent", "Cheapest", "Men", "Women"];
  


  _keyExtractor = _ => _.sku.toString();

  onFilterButtonPress = (item) => {

  }

  updateSearch = (search) => this.setState({search});


  renderHeader = () => {
    return (
      <Fragment>
        <SearchBar 
          placeholder="Search" 
          onChangeText={this.updateSearch} 
          value={this.state.search} 
          inputContainerStyle={styles.searchBarInner} 
          inputStyle={styles.searchBarInner} 
          containerStyle={styles.searchBarOuter}
        />
        <FlatList 
          style={styles.filterList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.filters} 
          renderItem={this.renderFilter}
          keyExtractor={(item, index) => index.toString()}
        />
      </Fragment>
    );
  }

  renderFilter = (item) => {
    return (
        <TouchableHighlight underlayColor='blue' onPress={this.onFilterButtonPress} style={styles.filterButton}>
          <Text>{item.item}</Text>
        </TouchableHighlight>
      );
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

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.container}>
          <FlatList 
            style={styles.list}
            data={sampleData}
            ListHeaderComponent={this.renderHeader}
            ListHeaderComponentStyle={styles.header}
            renderItem={this._renderItem} 
            numColumns={2}
            keyExtractor={this._keyExtractor}
            showsVerticalScrollIndicator={false}
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

  header: {
    backgroundColor: Colors.lighter,
    marginBottom:10
  },

  searchBarInner: {
    backgroundColor: Colors.white,
    marginHorizontal: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  searchBarOuter: {
    backgroundColor: Colors.lighter,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  filterList: {
    marginLeft: 7,
    marginRight: 7
  },

  filterButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    width:100,
    marginHorizontal:1,
    padding:5
  }
});

export default ExplorePage;
