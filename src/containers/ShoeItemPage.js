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
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { Icon } from 'react-native-elements';
import Colors from '../Colors';
import ShoeItem from './ShoeItem';
import data from '../data/shoes';
import featuredData from '../data/sample-shoes';

const { height, width } = Dimensions.get('window');

class ShoeItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeData: {},
      isFavorite: false,
      usedActive: false,
      newActive: false,
      makeOfferActive: false
    }
  }

  fetchData() {
    const { navigation } = this.props;
    const sku = navigation.getParam('sku', '');
    const allData = data.concat(featuredData);
    const shoeData = allData.find(d => d['sku'] === sku);
    this.setState({
      shoeData: shoeData
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  handleFavoriteOnPress = () => {
    this.setState((state) => ({
      isFavorite: !state.isFavorite
    }));
  }

  handleUsedOnPress = () => {
    this.setState((state) => ({
      usedActive: !state.usedActive,
      newActive: false,
      makeOfferActive: false
    }));
  }

  handleNewOnPress = () => {
    this.setState((state) => ({
      usedActive: false,
      newActive: !state.newActive,
      makeOfferActive: false
    }));
  }

  handleMakeOfferOnPress = () => {
    this.setState((state) => ({
      usedActive: false,
      newActive: false,
      makeOfferActive: !state.makeOfferActive
    }));
  }

  renderFeaturedShoes = () => {
    return featuredData.map(item =>
      <View style={styles.featuredShoeItemContainer}>
        <ShoeItem
          key={item.sku}
          brand={item.brand}
          description={item.description}
          sku={item.sku}
          uri={item.img}
        />
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={this.handleFavoriteOnPress}
              accessibilityRole={'button'}
              style={{alignSelf: 'flex-end', margin: 10}}
            >
              <Icon name={this.state.isFavorite ? 'favorite' : 'favorite-border'} size={20} />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{uri: this.state.shoeData.img}}
            />
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <TouchableOpacity
                onPress={this.handleUsedOnPress}
                accessibilityRole={'button'}
                style={this.state.usedActive ? styles.clickedTextContainer : styles.unclickedTextContainer}
              >
                <Text style={this.state.usedActive ? styles.clickedText : styles.unclickedText}>Used</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleNewOnPress}
                accessibilityRole={'button'}
                style={this.state.newActive ? styles.clickedTextContainer : styles.unclickedTextContainer}
              >
                <Text style={this.state.newActive ? styles.clickedText : styles.unclickedText}>New</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleMakeOfferOnPress}
                accessibilityRole={'button'}
                style={this.state.makeOfferActive ? styles.clickedTextContainer : styles.unclickedTextContainer}
              >
                <Text style={this.state.makeOfferActive ? styles.clickedText : styles.unclickedText}>Make Offer</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.detailsScrollContainer}>
              <View style={styles.detailsContainer}>
                <Text>SKU</Text>
                <Text style={{fontWeight: '500'}}>{this.state.shoeData.sku}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text>Description</Text>
                <Text style={{fontWeight: '500'}}>{this.state.shoeData.description}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text>Brand</Text>
                <Text style={{fontWeight: '500'}}>{this.state.shoeData.brand}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text>Color</Text>
                <Text style={{fontWeight: '500'}}>{this.state.shoeData.color}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15}}>
                <Text>Related Search</Text>
                <TouchableOpacity>
                  <Icon name='arrow-forward' size={20} />
                </TouchableOpacity>
              </View>
              <View style={{paddingBottom: 20}}>
                <ScrollView horizontal={true}>
                  {this.renderFeaturedShoes()}
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('description', '')
    };
  };
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#e8e8e8',
    flex: 1
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    width: width - 60,
    resizeMode: 'contain'
  },
  detailsScrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3
  },
  clickedTextContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10
  },
  unclickedTextContainer: {
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10
  },
  clickedText: {
    color: 'black'
  },
  unclickedText: {
    color: 'white'
  },
  featuredShoeItemContainer: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'white',
    padding: 5,
    marginRight: 3,
  },
});

export default withNavigation(ShoeItemPage);
