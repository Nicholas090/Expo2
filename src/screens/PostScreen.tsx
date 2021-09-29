import React, { useEffect } from 'react';
import { View, Text , StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DATA } from '../data';
type Props = NativeStackScreenProps<RootStackParamList, 'PostScreen'>;


export const PostScreen:React.FC<Props>  = ({ navigation, route }) => {
    const { postId } = route.params


    // useEffect(() => {
    //     navigation.setOptions({
    //         title: `Пост ${postId}`
    //     })
    // }, [])


    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Пост ' + postId,
        });
      }, [navigation, postId]);
    

      const post = DATA.find(p => p.id === postId) 

     const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
              {
                text: "Отменить",
                style: "cancel"
              },
              { text: "Удалить", style: 'destructive', onPress: () => console.log("OK Pressed") }
            ]
            )
     }
  
    return (
        <ScrollView >
           <Image source={{uri: post?.img }} style={styles.image}/>
           <View style={styles.textWrap}>
               <Text>{post?.text}</Text>
           </View>
           <Button title="Удалить" color={'red'} onPress={removeHandler}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
       width: '100%',
       height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
}) 