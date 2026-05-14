import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { RootStackParamList } from '../../../../Navigation/AppNavigation';

type AppStarterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;
export const SplashScreen = () => {
  const navigation = useNavigation<AppStarterNavigationProp>();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
