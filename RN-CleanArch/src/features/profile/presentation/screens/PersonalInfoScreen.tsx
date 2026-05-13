import { StyleSheet, Text, View } from 'react-native';
import ProfileNavigationItem from '../widgets/ProfileNavigationItem';
import Separator from '../../../../shared/widgets/Separator';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import SecondaryHeader from '../../../../shared/widgets/SecondaryHeader';

const PersonalInfoScreen = () => {
  return (
    <View style={styles.container}>
      <SecondaryHeader title='Informations personnelles'/>
    <GlobeCard style= {styles.card} child={<View >
      <ProfileNavigationItem
        text="Identité"
        iconName="person-outline"/>
        <Separator/>
        <ProfileNavigationItem text="Coordonnés" iconName='pin-outline'/>
        <Separator/>
        <ProfileNavigationItem text="Références de tailles" iconName='shield-outline'/>
        <Separator/>
        <ProfileNavigationItem text="Informations bancaires" iconName='card-outline'/>
        <Separator/>
        <ProfileNavigationItem text="E-mail" iconName='mail-open-outline'/>
        
    </View>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    margin:10,
    marginRight:10,
  },
  card: { 
    flex:1,
  }
});   

export default PersonalInfoScreen;
