import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Play from './components/Play';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Home/> */}
      <Play/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
