import React,{useState, useContext} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {Context} from '../context/BlogContext'

const CreateScreen = ()=>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {addBlogPost} = useContext(Context)
    return(
        <View>
        <Text>
            Create Screen
        </Text>
        <Text>Enter Title:</Text>
        <TextInput
         style={styles.input}
         value={title}
         onChangeText={(text)=>setTitle(text)}
        />
        <Text>Enter Content:</Text>
        <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text)=>setContent(text)}
         />
         <Button
         title="add blog post"
         onPress={()=>addBlogPost(title, content)}
         />
    </View>
    )
}
const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default CreateScreen