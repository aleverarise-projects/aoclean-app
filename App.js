//import liraries
import 'react-native-gesture-handler';
import React from 'react';
import { observer } from 'mobx-react';
import Store from './src/store/Store';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/config/theme';

// Stacks
import SignInStack from './src/stacks/SignInStack';
import TabStack from './src/stacks/TabStack';

// create a component
const App = observer(() => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {!Store.isLogin && <SignInStack />}
        {Store.isLogin && <TabStack />}
      </NavigationContainer>
    </PaperProvider>
  );
});

//make this component available to the app
export default App;
