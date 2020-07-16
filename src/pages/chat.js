import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import submitImg from '../imgs/submit.png';
import { FlatList } from 'react-native-gesture-handler';

const Chat = () => {

    const [dataMessages, setDataMessages] = useState([]);

    //get data from async storage
    const getData = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            console.log(name);
        } catch {

        }
    }

    const message = (item) => {
        return(
            <View>

            </View>
        );
    }

    const addMessage = () => {
        return(
            <View>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#011826"
            />
            <View style={styles.header}>
                <Text style={styles.title}>Nome da Empresa</Text>
            </View>

            <View style={styles.body}>
                <FlatList
                    style={{ flex: 1 }}
                    data={dataMessages}
                    renderItem={(item) => message(item)}
                />
            </View>

            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', }}>
                    <TextInput
                        style={styles.inputField}
                        placeholder={'Digite Sua Mensagem...'}
                        placeholderTextColor={'#80939F'}                        
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={() => addMessage()}>
                        <Image source={submitImg} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEFFFC",
    },

    //header
    header: {
        flex: 1,
        width: '100%', height: 50,
        backgroundColor: '#011826',
        alignItems: "flex-start", justifyContent: "center",
    },
    title: {
        fontSize: 30,
        color: "#6BF2D9",
        left: 15,
    },

    //body 
    body: {
        width: '100%',
        height: '100%',
        flex: 11,
    },

    //footer
    footer: {
        flex: 1,
        width: '100%', height: 50,
        backgroundColor: '#6BF2D9',
    },
    inputField: {
        backgroundColor: 'white',
        borderRadius: 60,
        width: '90%', height: '70%',
        top: 5,
        left: 15,
    },
    submitButton: {
        width: 75, height: 75,
        borderRadius: 100,
        backgroundColor: "#6BFEE3",
        alignItems: 'center', justifyContent: "center",
        zIndex: 5,
        right: 40,
        bottom: 10,
    },
});

export default Chat;