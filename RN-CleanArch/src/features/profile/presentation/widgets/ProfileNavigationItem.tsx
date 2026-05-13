import { View, Text, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';
import { container } from '../../../../core/di/container';
import { Ionicons } from '@expo/vector-icons';

type NavigationItemProps = {
  text: string;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  onPress?: () => void;
};
const ProfileNavigationItem = (props: NavigationItemProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
      <Ionicons name={props.iconName} size={24} color="black" />
      <Text style={styles.itemText}>{props.text}</Text>
      <Ionicons
        name="chevron-forward-outline"
        size={24}
        color="black"
        style={{ marginLeft: 'auto' }}/>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  itemText: {
    marginLeft: 10,
    color: '#000000',
  },
});

export default ProfileNavigationItem;
