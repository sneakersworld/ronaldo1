/**
 * containers/ExplorePage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { FlatList } from 'react-navigation';

import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import sample from '../data/shoes';
import featuredSample from '../data/shoes';

const numColumns = 2;
const { height, width } = Dimensions.get('window');

class ExplorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  _renderItem = ({item}) => {
    if (item == 'undefined') { // 
    } else {
      return (
        <View style={styles.shoeItemContainer}>
          <ShoeItem
            key={item.id}
            brand={item.brand}
            description={item.description}
            sku={item.sku}
            uri={item.img}
          />
        </View>
      )
    }
  }

  _keyExtractor = _ => _.sku.toString();

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.container}>
          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.featuredText}>Featured</Text>
                <TouchableOpacity>
                  <Icon name='arrow-forward' size={20} iconStyle={styles.featuredIcon} />
                </TouchableOpacity>
              </View>
              <View>
                <ScrollView
                  horizontal={true}
                >
                  {
                    featuredSample.map((item) => 
                      <ShoeItem
                        key={item.sku}
                        description={item.description}
                        uri={item.img}
                      />
                    )
                  }
                </ScrollView>
              </View>
            </View>
            <View style={{flex: 1, marginTop: 5}}>
              <Text style={styles.featuredText}>Just Dropped</Text>
              <FlatList
                data={sample}
                renderItem={this._renderItem}
                numColumns={numColumns}
                keyExtractor={this._keyExtractor}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#e8e8e8',
    flex: 1
  },
  container: {
    flex: 1
  },
  featuredText: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  featuredIcon: {
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  flatListContainer: {
    // marginBottom: 82
  },
  shoeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 0.3,
    borderRadius: 3,
    padding: 10,
    height: Dimensions.get('window').width / numColumns
  }
});

export default ExplorePage;
