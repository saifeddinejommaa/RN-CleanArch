import React from 'react';
import AppNavigation from './Navigation/AppNavigation';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store';

export default function App() {
  store.subscribe(() => {
    console.log('STORE UPDATED:', store.getState().auth);
  });
  return (
    <Provider store={store}>
      <AppNavigation />
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
