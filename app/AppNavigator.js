import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from './components/Icon'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import DishDetailScreen from './screens/DishDetailsScreen'
import FavouriteScreen from './screens/FavoruitesScreen'



const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const MenuStack = () =>{
    const navigation = useNavigation()
    return(
        <Stack.Navigator
            screenOptions={
                {   
                    headerRight: ()=> (<Icon 
                        action={()=> navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingRight: 25
                        }}
                    />),
                    headerStyle: {
                        backgroundColor: '#F53B50'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        >
            <Stack.Screen name="Menu" 
                component={MenuScreen} 
                options={{

                 }}
                 />
            <Stack.Screen 
                name="Dish Detail" 
                component={DishDetailScreen}
                options={
                    ({route}) =>({ title: route.params.dish.name})
                }
            />
        </Stack.Navigator>
    )
}


const FavStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={
                {   
                    headerRight: ()=> (<Icon 
                        action={()=> navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingRight: 25
                        }}
                    />),
                    headerStyle: {
                        backgroundColor: '#F53B50'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }
            }
        >
            <Stack.Screen name="Favourites" component={FavouriteScreen}/>
        </Stack.Navigator>
    )
}


const AppNavigator = props =>{
  return(
     <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen  name="Home" component={HomeScreen}/>
         <Drawer.Screen name="Menu" component={MenuStack}/>
         <Drawer.Screen name="Favourites" component={FavStack}/>
     </Drawer.Navigator> 
  )
}

export default AppNavigator