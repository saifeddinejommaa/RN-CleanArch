import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollableHeaderScreen } from '../../../../shared/widgets/ScrollableHeaderScreen';
import { CurrentMissionWidget } from '../widgets/CurrentMissionWidget';

export const HomeScreen = () => {
  const data = Array.from({ length: 30 });
  return (
    <ScrollableHeaderScreen
      child={
        <View style={styles.container}>
          <CurrentMissionWidget></CurrentMissionWidget>
        </View>
      }
    ></ScrollableHeaderScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  onGoingMission: {
    height: 300,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
