import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobePrincipalScreen } from '../../../shared/widgets/GlobePrincipalScreen';
import { GlobeCard } from '../../../shared/widgets/GlobeCard';
import { PromoterInfoWIdget } from './PromoterInfoWidget';

export const ProfileScreen = () => {
  return (
    <GlobePrincipalScreen
      screenTitle="Profile"
      child={
        <View style={styles.container}>
          <PromoterInfoWIdget></PromoterInfoWIdget>
          <GlobeCard style={styles.body} child={undefined}></GlobeCard>
        </View>
      }
    ></GlobePrincipalScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginTop: 0,
    width: '100%',
  },
});
