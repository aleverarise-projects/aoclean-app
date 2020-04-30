import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewRequestScreen from '../../screens/NewRequestScreen';
import { theme } from '../../config/theme';

const Stack = createStackNavigator();

const TabNewRequestStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.accent,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={NewRequestScreen}
        options={{
          title: 'New service',
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNewRequestStack;
