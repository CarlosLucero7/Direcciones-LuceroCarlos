import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import Colors from '../constants/Colors';


const ImageSelctor = (props) => {
    const [pickedUri,setPickedUri] = useState();

    const verifyPermissons = async () =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("Se necesita permisos para lanzar la app",[{text:'Ok'}])
            return false
        };
        return true
    };

    const handlerTakeImage = async ()=>{
        const hasPermission = await verifyPermissons();
        if (!hasPermission ) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        });
        setPickedUri(image.assets[0].uri)
        props.onImage(image.assets[0].uri)
    };



  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {!pickedUri ? 
            (<Text>No hay imagen...</Text>) 
            : (<Image source={{uri:pickedUri}} style={styles.image}/>)
            }
        </View>
        <Button 
        title='Tomar foto' 
        color={Colors.DARK_SIENNA} 
        onPress={handlerTakeImage}
        />
    </View>
  )
}

export default ImageSelctor

const styles = StyleSheet.create({
    container:{
        height:300,
        width:300
    },
    preview:{
        width:'100%',
        height:200,
        marginBottom:10,
        borderColor: Colors.BLUSH,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    }
})