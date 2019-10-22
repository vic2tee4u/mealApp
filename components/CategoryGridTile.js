import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'SanFrancisco-Lite',
    fontSize: 12
  }
});

export default CategoryGridTile;
