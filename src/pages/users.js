import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Chat = ({ navigation }) => {

    const storeData = async (name) => {
        try {
            await AsyncStorage.setItem('name', name);
        } catch {

        }
        navigation.navigate('Chat');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#011826"
            />
            <View style={styles.header}>
                <Text style={styles.title}>Selecione o Usuário</Text>
            </View>

            <View style={styles.body}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btn} onPress={() => storeData('VD')}>
                        <Text style={styles.btnTitle}>VD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => storeData('JF')}>
                        <Text style={styles.btnTitle}>JF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => storeData('KT')}>
                        <Text style={styles.btnTitle}>KT</Text>
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
        flex: 11,
        justifyContent: "center", alignItems: "center",
    },
    btn: {
        padding: 10, paddingRight: 50,
        backgroundColor: '#B4F8EC',
        marginHorizontal: 10,
    },
    btnTitle: {
        fontSize: 25,
        color: '#012840',
    },    
});

export default Chat;