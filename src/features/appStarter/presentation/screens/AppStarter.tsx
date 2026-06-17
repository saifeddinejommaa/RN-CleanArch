import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import GlobeButton from '../../../../shared/widgets/GlobeButton';
import LoopedVideo from '../../../../shared/widgets/LoopedVideo';
import { AuthStackParamList } from '../../../../Navigation/AppNavigation';

type AppStarterNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'AppStarter'
>;
export default function AppStarter() {
  const navigation = useNavigation<AppStarterNavigationProp>();
  return (
      <View style={styles.container}>
        <LoopedVideo />
        <View style={styles.overlay}>
          <GlobeButton
            onPress={() => navigation.navigate('LoginPwd')}
            child={<Text style={{ color: 'white' }}>S'authentifier</Text>}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 10, 
    elevation: 10, 
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
});
