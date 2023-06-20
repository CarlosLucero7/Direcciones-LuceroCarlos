import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItm';
import { loadAddress } from '../store/places.actions';

const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    useEffect(()=>{
        dispatch(loadAddress());
    },[])

    const renderItem = ({ item }) =>(
        <PlaceItem
            title={item.title}
            image={item.image}
            adress={"random"}
            onSelect={() => navigation.navigate("Detalle", {placeId: item.id})}
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


//  CLASE 07/06 MIN 01:05:00