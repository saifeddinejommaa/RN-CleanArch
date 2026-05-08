import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GlobeCard } from '../../../shared/widgets/GlobeCard';
import { typography } from '../../../theme/typography';

export const PromoterInfoWIdget = () => {
  return (
    <GlobeCard
      style={styles.card}
      child={
        <View style={styles.container}>
          <View style={styles.profilePhoto}></View>
          <Text style={[typography.caption, { color: 'black' }]}>Bonjour</Text>{' '}
        </View>
      }
    ></GlobeCard>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
  },
  profilePhoto: {
    height: 50,
    width: 50,
    marginRight: 10,
    backgroundColor: '#000000',
  },
});