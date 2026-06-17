import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollableHeaderScreen } from '../../../../shared/widgets/ScrollableHeaderScreen';
import { CurrentMissionWidget } from '../widgets/CurrentMissionWidget';
import UpComingMissionWidget from '../widgets/UpComingMissionWidget';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import GlobeButton from '../../../../shared/widgets/GlobeButton';
import { typography } from '../../../../theme/typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PromoterHeaderWidget from '../widgets/PromoterHeaderWidget';

export const HomeScreen = () => {
  return (
      <ScrollableHeaderScreen
       headerContent= {<PromoterHeaderWidget/>}
        child={
          <View style={styles.container}>
            <CurrentMissionWidget />
            <UpComingMissionWidget />
            <View style={styles.searchContainer}>
              <GlobeCard
                child={
                  <View style={styles.cardContainer}>
                    <Text style={styles.searchTitle}>
                      Trouver une mission qui vous convient
                    </Text>
                    <GlobeButton
                      onPress={() => {}}
                      child={
                        <Text style={styles.searchButtonText}>Trouver une mission</Text>
                      }
                    />
                  </View>
                }
              />
            </View>
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
  searchContainer: {
    marginTop: 20,
  },
  cardContainer: {
    alignItems: 'center',
  },
  searchTitle: {
    ...typography.LabelLarge,
    marginBottom: 10,
  },
  searchButtonText: {
    ...typography.LabelLarge,
    color: '#FFFFFF',
  },
});
