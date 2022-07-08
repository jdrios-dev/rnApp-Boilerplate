import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>HomeScreen</Text>
        <Icon name="airplane-outline" size={50} />
      </View>
    </NavigationContainer>
  );
};

export default App;
