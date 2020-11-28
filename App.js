import React from 'react'
import AppNavigator from './app/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './app/redux/store'
const App = props =>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  )
}

export default App
































// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/components/auth/Login'
// import Home from './src/components/All/Home'

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;