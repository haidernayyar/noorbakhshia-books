/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BookList from "./app/Views/BookList/BookList";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FC6600"/>
      <SafeAreaView>
        <BookList/>
      </SafeAreaView>
      </NavigationContainer>
  );
};

export default App;
