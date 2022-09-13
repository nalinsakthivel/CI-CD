import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from './src/screen/NavBar';
const App = () => {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
