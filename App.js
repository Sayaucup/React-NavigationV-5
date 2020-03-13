import React,{Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Route = createStackNavigator();

import Home from './page/home'
import Detail from './page/detail'

function App() {
  return (
    <NavigationContainer>
      <Route.Navigator screenOptions={{
          headerStyle: {
            backgroundColor:'#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Route.Screen name='Home' component={Home} />
        <Route.Screen name='Detail' component={Detail}/>
      </Route.Navigator>
    </NavigationContainer>
  )
}

export default App;