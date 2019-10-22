/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'


import MealsNavigator from './navigation/MealsNavigator';
import mealReducer from './store/reducers/meal'

useScreens()

const rootReducer = combineReducers({
  meals: mealReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'SanFrancisco': require('./assets/fonts/SF-UI-Display-Regular.otf'),
    'SanFrancisco-Lite': require('./assets/fonts/SF-UI-Display-Light.otf'),
    'SanFrancisco-Medium': require('./assets/fonts/SF-Compact-Text-Medium.otf'),
    'SanFrancisco-Heavy': require('./assets/fonts/SF-Compact-Display-Heavy.otf')
  });
};


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  }
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


