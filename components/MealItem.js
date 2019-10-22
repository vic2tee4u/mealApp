import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text style={styles.lowerText}>{props.duration}m</Text>
          <Text style={styles.lowerText}> {props.complexity.toUpperCase()}</Text>
          <Text style={styles.lowerText}> {props.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10
  },
  title: {
    fontFamily: 'SanFrancisco',
    color: '#fff'
  },
  lowerText: {
    fontFamily: 'SanFrancisco-Lite',
    fontSize: 10
  }
});

export default MealItem;
