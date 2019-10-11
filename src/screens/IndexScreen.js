import React,{useContext} from 'react';
import {View, Text, StyleSheet,FlatList, Button,TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
const IndexScreen = ({navigation})=>{
const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return(
    <View>
        <Button
         title="add post"
         onPress={addBlogPost}

         />
        <FlatList
         data={state}
        keyExtractor={(blogPost)=>{blogPost.title}}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>navigation.navigate('ShowBlog',{id:item.id})}>
                    <View style={styles.viewStyle}>
                    <Text>{item.title}-{item.id}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                    <Feather style={styles.trashStyle} name="trash" />
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            )
        }}
        />
    </View>
)
}
IndexScreen.navigationOptions= ({navigation})=>{
    return{
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('CreateBlog')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
    };
}
const styles =StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    trashStyle:{
        fontSize: 30
    }
})
export default IndexScreen

























