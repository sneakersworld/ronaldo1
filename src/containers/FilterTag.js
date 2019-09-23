import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FilterTag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.filterTagContainer}>
        <Text style={styles.filterTagText}>
          {this.props.tag}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filterTagContainer: {
    minHeight: 20,
    minWidth: 40,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 0.2,
    borderRadius: 2
  },
  filterTagText: {
    fontWeight: '700',
    fontSize: 10
  }
});

export default FilterTag;
