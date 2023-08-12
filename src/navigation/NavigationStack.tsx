import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GlobalStyles } from '../utils/globalStyles/GlobalStyles';
import { ROUTES } from './Routes';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            title: 'The Beer App',
            headerTitleStyle: {
              color: GlobalStyles.colors.PRIMARY,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.DETAILS}
          component={DetailsScreen}
          options={{
            title: '',
            headerTitleStyle: {
              color: GlobalStyles.colors.PRIMARY,
            },
            headerBackTitle: 'Go Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
