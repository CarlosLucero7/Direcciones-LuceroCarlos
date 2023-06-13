import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItm';

const PlaceListScreen = () => {
    const places = useSelector(state => state.places.places);

    const renderItem = ({ item }) =>(
        <PlaceItem
            title={item.title}
            image={item.image}
            adress={"random"}
            onSelect={()=> navigation.navigate("Detalle",{placeId: item.id})}
        />
    )
    
    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    
})

export default PlaceListScreen
