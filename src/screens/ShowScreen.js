import React,{useContext} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Context} from '../context/BlogContext'

const ShowScreen = ({navigation})=>{
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id')) //find() is built in
    navigation.getParam('id')
    return(
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )

}
const styles= StyleSheet.create({
    
})

export default ShowScreen