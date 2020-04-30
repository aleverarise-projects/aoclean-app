import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { theme } from '../config/theme';
import TabHomeStack from './stacks/TabHomeStack';
import TabProfileStack from './stacks/TabProfileStack';
import TabSearchStack from './stacks/TabSearchStack';
import TabWalletStack from './stacks/TabWalletStack';
import TabNewRequestStack from './stacks/TabNewRequestStack';

const Tab = createMaterialBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Wallet"
        component={TabWalletStack}
        options={{
          tabBarLabel: 'Ganancias',
          tabBarColor: theme.colors.background2,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            let IconComponent = MaterialCommunityIcons;
            let iconName = focused ? 'wallet' : 'wallet-outline';
            let color = focused ? '#FFF' : '#FFF';
            return <IconComponent name={iconName} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={TabHomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: theme.colors.primary,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            let IconComponent = MaterialCommunityIcons;
            let iconName = focused ? 'home' : 'home-outline';
            let color = focused ? '#FFF' : '#FFF';
            return <IconComponent name={iconName} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NewRequest"
        component={TabNewRequestStack}
        options={{
          tabBarLabel: 'Nuevo',
          tabBarColor: theme.colors.accent,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            let IconComponent = MaterialCommunityIcons;
            let iconName = focused ? 'plus-circle' : 'plus-circle-outline';
            let color = focused ? '#FFF' : '#FFF';
            return <IconComponent name={iconName} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={TabSearchStack}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarColor: theme.colors.background4,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            let IconComponent = MaterialCommunityIcons;
            let iconName = focused ? 'folder-search' : 'folder-search-outline';
            let color = focused ? '#FFF' : '#FFF';
            return <IconComponent name={iconName} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabProfileStack}
        options={{
          tabBarLabel: 'Perfil',
          tabBarColor: theme.colors.background5,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            let IconComponent = MaterialCommunityIcons;
            let iconName = focused ? 'face' : 'face-outline';
            let color = focused ? '#FFF' : '#FFF';
            return <IconComponent name={iconName} size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabStack;
