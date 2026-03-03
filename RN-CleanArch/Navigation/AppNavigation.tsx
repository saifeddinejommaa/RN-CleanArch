import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPwdScreen from '../features/auth/presentation/screens/LoginPwdScreen';
import AppStarter from '../features/appStarter/presentation/screens/AppStarter';
import { SplashScreen } from '../features/auth/presentation/screens/SplashScreen';
import { HomeScreen } from '../features/home/presentation/screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { checkAuth } from '../features/auth/presentation/AuthSlice';

export type RootStackParamList = {
  AppStarter: undefined;
  SplashScreen: undefined;
  LoginPwdScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id="auth-stack">
      <Stack.Screen name="AppStarter" component={AppStarter} />
      <Stack.Screen name="LoginPwdScreen" component={LoginPwdScreen} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id="home-stack">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const { isLoggedIn, isLoading } = useSelector((state: RootState) => state.auth);

  if (isLoading) {
    return <SplashScreen />;
  }

  return isLoggedIn ? <MainStack /> : <AuthStack />;
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
