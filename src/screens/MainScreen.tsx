import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text ,StyleSheet, Button, ModalProps, FlatList} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigation';
import { DATA } from '../data';
import { Post } from '../components/Post';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

    export const MainScreen:React.FC<Props> = ({ navigation }) => {
        
     const onPostHandler = (post: any) => {
      navigation.push('PostScreen', {postId: post.id, date: post.date})
     }

   


        
    return (
        <View style={styles.wrapper}>
            <FlatList 
            data={DATA} 
            keyExtractor={post => post.id.toString()}
            renderItem={({ item }) => {
                return (
                <Post 
                post={item}
                onOpen={onPostHandler}/>
                )
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
    
    }
})