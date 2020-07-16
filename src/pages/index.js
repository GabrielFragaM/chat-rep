import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Chat from './chat';
import Users from './users';

const Stack = createStackNavigator();

const MainStackNavigation = () => {

    const [username, setUsername] = useState('');

    //autenticação de teste de pessoa
    // AsyncStorage.removeItem('name');

    //get data from async storage
    getData = async () => {
        setUsername(await AsyncStorage.getItem('name'));
        username ? console.log('chat') : console.log('users');
        console.log('valor de username é' + username );
    }    
    getData();

    return (
        <Stack.Navigator headerMode={"none"} initialRouteName={username ? 'Chat' : 'Users'}>
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
}

export default function () {
    return (
        <NavigationContainer>
            <MainStackNavigation />
        </NavigationContainer>
    );
}

