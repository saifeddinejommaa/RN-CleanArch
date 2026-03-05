import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import GlobeButton from '../../../../shared/components/GlobeButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { login } from '../AuthSlice';

export default function LoginPwdScreen() {
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<any>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../../assets/images/my_globe_home_header.jpg')}
            style={styles.globeImage}
          />
          <View style={styles.paper}></View>
        </View>
        <View style={styles.editorsContainer}>
          <Text>Login:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          <Text>Password:</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} />
          <GlobeButton
            style={styles.authButton}
            child={
              isLoading ? <ActivityIndicator size="large" /> : <Text>S'authentifier</Text>
            }
            onPress={function (): void {
              dispatch(login({ email, password }));
            }}
          ></GlobeButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 40,
  },
  paper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    ...StyleSheet.absoluteFillObject,
  },
  editorsContainer: {
    flex: 60,
    marginTop: -20,
    padding: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  globeImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  authButton: {
    margin: 20,
  },
});
