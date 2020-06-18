import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStack } from 'react-native-screens';
import Inicio from './views/Index';
import Nosotros from './views/Nosotros';

const stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Inicio">
          <stack.Screen name="Inicio" component={Inicio} />
          <stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({
              title: route.params.clienteId
            })}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
