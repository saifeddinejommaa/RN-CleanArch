import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../../theme/typography';
import { Ionicons } from '@expo/vector-icons';

type EmptyDataWidgetProps = {
  message: string;
};

const EmptyDataWidget = (props: EmptyDataWidgetProps) => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} size={20} name="albums-outline" />
      <Text style={styles.textMessage}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMessage: {
    ...typography.LabelMedium,
    color: '#6B7280',
  },
  icon: {
    marginRight: 10,
  },
});

export default EmptyDataWidget;
