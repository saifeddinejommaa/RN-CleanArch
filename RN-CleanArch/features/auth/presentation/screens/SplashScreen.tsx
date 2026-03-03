import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../../../Navigation/AppNavigation';
import { RootState } from '../../../../app/store';
import { useEffect } from 'react';
import { checkAuth } from '../AuthSlice';
import React from 'react';

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
