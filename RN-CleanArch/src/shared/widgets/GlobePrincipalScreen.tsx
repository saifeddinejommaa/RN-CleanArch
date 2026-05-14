import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../../theme/typography';
import { StatusBar } from 'expo-status-bar';

type PrincipalScreenParams = {
  child: React.ReactNode;
  screenTitle: string;
};

export const GlobePrincipalScreen = ({ child, screenTitle }: PrincipalScreenParams) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="light" />
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={[typography.label2XLarge, { color: 'white' }]}>{screenTitle}</Text>
        </View>
        <View style={styles.childContainer}>{child}</View> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00529C',
  },
  header: {
    backgroundColor: '#00529C',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  childContainer: {
    flex: 1,
    marginTop: -40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
