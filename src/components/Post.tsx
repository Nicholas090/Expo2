import React from "react";
import { View, StyleSheet, ImageBackground, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IData } from "../data";

interface PostProp {
    post: IData,
    onOpen: (arg1:any) => void
}

export const Post:React.FC<PostProp> =({post, onOpen}) => {

    
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.post}>
            <ImageBackground style={styles.image} source={{uri: post.img} }>
             <View style={styles.textWrap}>
                <Text style={styles.title}>{post.date}</Text>
             </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
        },
    title: {
        color: '#ffff', 
        fontFamily: 'open-bold-italic'
        }
})