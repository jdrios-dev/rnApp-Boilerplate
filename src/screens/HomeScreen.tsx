import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text>HomeScreen</Text>
      <Button
        title="Detail Screen"
        onPress={() => navigation.navigate('DetailScreen' as any)}
      />
    </View>
  );
};

export default HomeScreen;
