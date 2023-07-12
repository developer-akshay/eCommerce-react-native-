import React from 'react';
import { useAuth } from '../hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';
import LoginScreen from '../screens/loginScreen/loginScreen';

export default function RootNavigation() {
  // const { user } = useAuth();
//   const user= null
  // console.log('userrrrrrrrrrrr, ',user)
return <LoginScreen navigation={undefined} />
  // return user ? <UserStack /> : <AuthStack />;
}