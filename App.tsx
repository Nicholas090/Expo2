import React, {useState} from 'react';
import {  Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {bootstrap} from './src/bootstrap'

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
    <AppLoading 
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)}
      onError={(error) => console.log(error)}
    />
    )
  }

  return (
    <View>
      <Text>Hello, World!!!</Text>
    </View>
  );
}

