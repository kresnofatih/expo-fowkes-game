import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './Colors';
import Home from './components/Home';
import Play from './components/Play';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {page==='home' &&
        <Home changePage={setPage}/>
      }
      {page==='play' &&
        <Play changePage={setPage}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dgray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
