import { StyleSheet, Text, View } from 'react-native';
import ProfileNavigationItem from '../widgets/ProfileNavigationItem';
import Separator from '../../../../shared/widgets/Separator';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import SecondaryHeader from '../../../../shared/widgets/SecondaryHeader';
import { ProfileStackParamList } from '../../../../Navigation/AppNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProfileStarterNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'PersonalInfo'
>;

const PersonalInfoScreen = () => {
  const navigation = useNavigation<ProfileStarterNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <SecondaryHeader title="Informations personnelles" />
      <GlobeCard
        style={styles.card}
        child={
          <View>
            <ProfileNavigationItem
              text="Identité"
              iconName="person-outline"
              onPress={() => {
                navigation.navigate('Identity');
              }}
            />
            <Separator />
            <ProfileNavigationItem text="Coordonnés" iconName="pin-outline" />
            <Separator />
            <ProfileNavigationItem
              text="Références de tailles"
              iconName="shield-outline"
              onPress={() => {
                navigation.navigate('SizesReference');
              }}
            />
            <Separator />
            <ProfileNavigationItem
              text="Informations bancaires"
              iconName="card-outline"
            />
            <Separator />
            <ProfileNavigationItem text="E-mail" iconName="mail-open-outline" onPress={() => { navigation.navigate('Email'); }}/>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginRight: 10,
  },
  card: {
    flex: 1,
  },
});

export default PersonalInfoScreen;
