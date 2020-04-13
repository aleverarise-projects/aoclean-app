import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../screens/search/SearchScreen';
import { theme } from '../../config/theme';

const Stack = createStackNavigator();

const TabSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background4,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default TabSearchStack;
