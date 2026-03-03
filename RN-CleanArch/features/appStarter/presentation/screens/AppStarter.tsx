import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../Navigation/AppNavigation';
import LoopedVideo from '../../../../shared/components/LoopedVideo';
import GlobeButton from '../../../../shared/components/GlobeButton';

type AppStarterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AppStarter'
>;
export default function AppStarter() {
  const navigation = useNavigation<AppStarterNavigationProp>();
  return (
    <View style={styles.container}>
      <LoopedVideo />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GlobeButton
          onPress={() => navigation.navigate('LoginPwdScreen')}
          child={<Text>S'authentifier</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
});
