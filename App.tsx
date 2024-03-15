import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewStoreNavigation from './src/navigation/NewStoreNavigation';
import {StatusBar} from 'react-native';
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'orange'} />
      <NewStoreNavigation />
    </NavigationContainer>
  );
}
export default App;
