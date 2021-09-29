import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {bootstrap} from './src/bootstrap'
import Navigation from './src/navigation/AppNavigation';



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

  return <Navigation />
}

