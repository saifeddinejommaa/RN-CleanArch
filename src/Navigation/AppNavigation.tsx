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
import { ProfileScreen } from '../features/profile/presentation/screens/ProfileScreen';
import { BottomBarIcon } from './BottomBarIcon';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../features/search/presentation/screens/SearchScreen';
import PersonalInfoScreen from '../features/profile/presentation/screens/PersonalInfoScreen';
import IdentityScreen from '../features/profile/presentation/screens/IdentityScreen';
import SizesReferenceScreen from '../features/profile/presentation/screens/SizesReferenceScreen';
import EmailScreen from '../features/profile/presentation/screens/EmailScreen';
import { RequestStatus } from '../features/shared/presentation/RequestSatus';

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

export type AuthStackParamList = {
  AppStarter: undefined;
  LoginPwd: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Search: undefined;
  ProfileStack: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  PersonalInfo: undefined;
  Identity : undefined;
  SizesReference : undefined;
  Email : undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const MainStackNavigator = createNativeStackNavigator<MainStackParamList>();
const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();
const ProfileStackNavigator = createNativeStackNavigator<ProfileStackParamList>();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthStackNavigator.Screen name="AppStarter" component={AppStarter} />
      <AuthStackNavigator.Screen name="LoginPwd" component={LoginPwdScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStackNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStackNavigator.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <ProfileStackNavigator.Screen name="Identity" component={IdentityScreen} />
      <ProfileStackNavigator.Screen name="SizesReference" component={SizesReferenceScreen} />
      <ProfileStackNavigator.Screen name="Email" component={EmailScreen} />
    </ProfileStackNavigator.Navigator>
  );
};

function MainTabs() {
  const Tab = createBottomTabNavigator();
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
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
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
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={{ headerShown: false }} id="main-stack">
      <MainStackNavigator.Screen name="Home" component={MainTabs} />
    </MainStackNavigator.Navigator>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const { status, data } = useSelector((state: RootState) => state.auth);

  if (status === RequestStatus.loading) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {status === RequestStatus.success ? (
        <RootStack.Screen name="MainStack" component={MainTabs} />
      ) : (
        <RootStack.Screen name="AuthStack" component={AuthStack} />
      )}
    </RootStack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
