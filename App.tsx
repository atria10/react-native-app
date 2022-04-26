import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import NavigationProvider from './src/navigation';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
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
