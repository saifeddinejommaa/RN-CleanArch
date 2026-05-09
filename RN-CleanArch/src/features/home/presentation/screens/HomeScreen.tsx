import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollableHeaderScreen } from '../../../../shared/widgets/ScrollableHeaderScreen';
import { CurrentMissionWidget } from '../widgets/CurrentMissionWidget';
import UpComingMissionWidget from '../widgets/UpComingMissionWidget';

export const HomeScreen = () => {
  const data = Array.from({ length: 30 });
  return (
    <ScrollableHeaderScreen
      child={
        <View style={styles.container}>
          <CurrentMissionWidget/>
          <UpComingMissionWidget/>
        </View>
      }
    ></ScrollableHeaderScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
