import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SecondaryHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.backIcon} onPress={navigation.goBack}>
        <Ionicons name="chevron-back" size={24} color="#333" />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SecondaryHeader;
