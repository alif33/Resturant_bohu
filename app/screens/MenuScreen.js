import React, { useEffect } from 'react';
import { View, Text, Platform, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { connect } from 'react-redux'
import MenuItem from '../components/MenuItem'
import { getDishes } from '../redux/actionCreators'
import { FlatList } from 'react-native-gesture-handler';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}
const mapDispatchToProps = dispatch => {
    return {
         getDishes : () => dispatch(getDishes())
    }
}
const MenuScreen = (props) =>{
    useEffect(()=>{
         props.getDishes()
    }, [])
    // console.log(props)
    return(
        <View style={styles.view}> 
            <FlatList 
                data={props.dishes}
                renderItem={
                ({item}) =>(<MenuItem item = {item} selectDish={ ()=>props.
                navigation.navigate("Dish Detail", {dish: item })}/>)
                }
                keyExtractor={ item => item.id.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios'? 0 : Constants.statusBarHeight
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);