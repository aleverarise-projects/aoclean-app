import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import RecoveryScreen from '../screens/auth/RecoveryScreen';

const Stack = createStackNavigator();

const SignInStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  );
};

export default SignInStack;
