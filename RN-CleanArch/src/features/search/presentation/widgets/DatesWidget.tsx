import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../../../../theme/typography';
import { container } from '../../../../core/di/container';

const DatesWidget = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.startDateContainer}>
        <Text>Début</Text>
        <Text style={typography.LabelMedium}>{startDate.toLocaleDateString()}</Text>
      </View>
      <View style={styles.endDateContainer}>
        <Text>Fin</Text>
        <Text style={typography.LabelMedium}>{endDate.toLocaleDateString()}</Text>
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

export default DatesWidget;
