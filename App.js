import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pageone from './components/Pageone';
import Pagetwo from './components/Pagetwo';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Page 1"
        onPress={() => navigation.navigate('Pageone')}
      />
      <Button
        title="Page 2"
        onPress={() => navigation.navigate('Pagetwo')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pageone" component={Pageone} options={{ title: 'Info Voucher' }} />
        <Stack.Screen name="Pagetwo" component={Pagetwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;