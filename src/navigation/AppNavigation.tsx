import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';



export type RootStackParamList = {
  MainScreen: undefined,
  PostScreen: {postId: string, date: string},
};



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white'
            }
          }}>
            <Stack.Screen
            name="MainScreen" 
            component={MainScreen} 
            options={{title: 'Мой блог', headerTintColor: 'red'}}/>
            <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{
            headerStyle: {
              backgroundColor: 'orange'
            }
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

