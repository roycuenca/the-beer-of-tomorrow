import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { BeerProvider } from './src/Context/BeerContext';
import Navigation from './src/navigation/NavigationStack';

const theme = {
  ...DefaultTheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <BeerProvider>
        <Navigation />
      </BeerProvider>
    </PaperProvider>
  );
}
