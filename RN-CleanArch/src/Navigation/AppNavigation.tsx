import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPwdScreen from '../features/auth/presentation/screens/LoginPwdScreen';
import AppStarter from '../features/appStarter/presentation/screens/AppStarter';
import { SplashScreen } from '../features/auth/presentation/screens/SplashScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { checkAuth } from '../features/auth/presentation/AuthSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../features/home/presentation/screens/HomeScreen';
import { ProfileScreen } from '../features/profile/presentation/ProfileScreen';
import { BottomBarIcon } from './BottomBarIcon';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  AppStarter: undefined;
  SplashScreen: undefined;
  LoginPwdScreen: undefined;
  MainStack: undefined;
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
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else {
              iconName = 'bug-outline';
            }

            return <BottomBarIcon focused={focused} name={iconName} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id="main-stack">
      <Stack.Screen name="MainStack" component={MyTabs} />
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
