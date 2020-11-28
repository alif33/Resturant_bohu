import React, { Component } from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native'
import Constants from 'expo-constants'
const HomeScreen = (props) =>{
    // console.log(props)
    return(
        <View style={styles.view}> 
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios'? 0 : Constants.statusBarHeight
    }
})

export default HomeScreen;