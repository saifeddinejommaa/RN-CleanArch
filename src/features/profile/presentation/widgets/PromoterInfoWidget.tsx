import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { typography } from '../../../../theme/typography';

export const PromoterInfoWIdget = () => {
  return (
    <GlobeCard
      child={
        <View style={styles.container}>
          <View style={styles.profilePhoto}></View>
          <Text style={[typography.LabelXSmall, { color: 'black' }]}>Bonjour</Text>{' '}
        </View>
      }
    ></GlobeCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profilePhoto: {
    height: 50,
    width: 50,
    marginRight: 10,
    backgroundColor: '#000000',
  },
});
