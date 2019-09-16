/**
 * containers/SearchPage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component, Fragment } from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { FlatList } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import sample from '../data/shoes';

const numColumns = 2;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchBarFocused: false,
      search: ''
    }
  }

  componentDidMount() {
    // this.keyBoardDidShow = Keyboard.addListener(
    //   'keyboardDidShow',
    //   this.keyboardDidShow
    // );
    // this.keyBoardWillShow = Keyboard.addListener(
    //   'keyboardWillShow',
    //   this.keyboardWillShow
    // );
    // this.keyBoardWillHide = Keyboard.addListener(
    //   'keyboardWillHide',
    //   this.keyboardWillHide
    // );

    this.startHeaderHeight = 80
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  // Android does not use keyboardDidShow
  // keyboardDidShow = () => {
  //   this.setState({ searchBarFocused: true })
  // }

  // keyboardWillShow = () => {
  //   this.setState({ searchBarFocused: true })
  // }

  // keyboardWillHide = () => {
  //   this.setState({ searchBarFocused: false })
  // }

  updateSearch = search => {
    this.setState({
      search: search
    });
    console.log(search);
  };

  render() {
    let searchInput;

    if (this.state.searchBarFocused) {
      searchInput = (
        <Animatable.View animation='slideInRight' duration={500} style={styles.searchContainer} >
          <TextInput placeholder='Search' style={styles.searchInput} />
        </Animatable.View>
      );
    } else {
      searchInput = (
        <View style={styles.searchContainer} >
          <Icon name='search' style={styles.searchIcon} />
          <TextInput placeholder='Search' style={styles.searchInput} />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={[{height: this.startHeaderHeight}, styles.headerContainer]}>
            <View style={[{marginTop: Platform.OS === 'android'? '30' : null}, styles.searchContainer]}>
              <Icon name='search' size={20} style={styles.searchIcon}/>
              <TextInput
                placeholder='Try Jordan 1 Travis Scott'
                placeholderTextColor='grey'
                style={styles.searchTextInput}
              />
            </View>
          </View>
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
  headerContainer: {
    backgroundColor: '#e8e8e8',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1 // android
  },
  searchTextInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white'
  }
});

export default SearchPage;
