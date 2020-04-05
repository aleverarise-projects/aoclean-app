import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WalletScreen from '../../screens/wallet/WalletScreen';
import { theme } from '../../config/theme';

const Stack = createStackNavigator();

const TabWalletStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background2,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'My wallet',
        }}
      />
    </Stack.Navigator>
  );
};

export default TabWalletStack;
