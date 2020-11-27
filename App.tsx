import React from 'react';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './navigations/HomeNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
          <HomeNavigator/>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
