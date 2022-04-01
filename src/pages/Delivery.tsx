import React from 'react';
import styled from 'styled-components/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  //flex: 1;
  //justify-content: center;
  //align-items: center;
`;

const Stack = createNativeStackNavigator();

export default function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen
        name="Ing"
        component={Ing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
