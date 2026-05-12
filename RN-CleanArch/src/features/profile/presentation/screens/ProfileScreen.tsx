import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobePrincipalScreen } from '../../../../shared/widgets/GlobePrincipalScreen';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { PromoterInfoWIdget } from '../widgets/PromoterInfoWidget';
import { container } from '../../../../core/di/container';
import ProfileNavigationItem from '../widgets/ProfileNavigationItem';
import Separator from '../../../../shared/widgets/Separator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../../Navigation/AppNavigation';

type ProfileStarterNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'ProfileScreen'
>;
export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileStarterNavigationProp>();

  return (
    <GlobePrincipalScreen
      screenTitle="Profile"
      child={
        <View style={styles.container}>
          <PromoterInfoWIdget></PromoterInfoWIdget>
          <GlobeCard
            style={styles.body}
            child={
              <View>
                <ProfileNavigationItem
                  text="Informations personnelles"
                  iconName="information-circle-outline"
                  onPress={() => navigation.navigate('PersonalInfo')}
                />
                <Separator />
                <ProfileNavigationItem text="Mes documenrs" iconName="document-outline" />
                <Separator />
                <ProfileNavigationItem
                  text="Sécurité et confidentialité"
                  iconName="server"
                  onPress={() => navigation.navigate('PersonalInfo')}
                />
                <Separator />
                <ProfileNavigationItem
                  text="Contacter Globe"
                  iconName="phone-portrait-outline"
                />
                <Separator />
                <ProfileNavigationItem text="Déconnection" iconName="log-out-outline" />
                <Separator />
              </View>
            }
          />
        </View>
      }
    ></GlobePrincipalScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
});
