import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { addPlace } from '../store/places.actions'
import { useDispatch } from 'react-redux'

const NewPlaceScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleTitleChange = (text)=> setTitle(text);
    const handleSave = () =>{
        dispatch(addPlace(title))
        navigation.navigate('Direcciones')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Titulo:</Text>
                <TextInput style={styles.input} value={title} onChangeText={handleTitleChange}/>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text>Guardar direccion</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputContainer: {
        justifyContent:'space-around',
        alignItems:'center',
        height:200,
        width:350,
        borderColor:'black',
        borderWidth:2,
        borderRadius:20,
        alignSelf:'center',
        margin:30
    },
    title:{
        fontSize:35
    },
    input:{
        width:200,
        height:30,
        borderBottomWidth:1,
        borderBottomColor:Colors.MAROON
    },
    button:{
        backgroundColor:Colors.LIGTH_PINK,
        height:40,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        borderWidth:1,
        borderColor:'black'
    }
})

export default NewPlaceScreen
