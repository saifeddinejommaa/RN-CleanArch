import { typography } from '../../../../theme/typography';
import { Text, View,StyleSheet } from 'react-native';
import MissionAddress from '../../domain/entities/MissionAddress';

const MissionAddressWidget = ({ missionAddress}: {missionAddress:MissionAddress[]}) => {
  return (
    <View style={styles.container}>
      <View style={styles.startDateContainer}>
        <Text>Localisation</Text>
        {missionAddress.map((address, index) =>  <Text key={index} style={typography.LabelMedium}>{address.addressName}</Text>)}
      </View>
      <View style={styles.endDateContainer}>
        <Text>Distance</Text>
        {missionAddress.map((address, index) =>  <Text key={index} style={typography.LabelMedium}>{address.distance?.toString()}</Text>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical:10
  },
  datesContainer: {
    marginTop: 8,
  },
  startDateContainer: {
    alignItems: 'flex-start',
  },
  endDateContainer: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
  }
});

export default MissionAddressWidget;
