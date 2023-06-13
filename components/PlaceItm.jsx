import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const PlaceItem = ({title, image, onSelect, adress}) => {
  return (
    <TouchableOpacity style={styles.placeItem} onPress={onSelect}>
        <Image style={styles.image} source={{uri: image}}/>
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.adress}>{adress}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
    placeItem:{
        borderBottomColor: 'grey',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30,
        paddingVertical:10
    },
    image:{
        width:70,
        height:70,
        borderRadius:20,
        backgroundColor:Colors.PEACH_PUFF
    },
    info:{
        marginLeft:25,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    title:{
        color:Colors.DARK_SIENNA,
        fontSize:25,
        marginBottom:10
    },
    adress:{
        color: 'black',
        fontSize:15
    }

})