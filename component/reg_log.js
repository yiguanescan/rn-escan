import React, {Component} from 'react';
import {AppRegistry,Platform,Alert, StyleSheet, Text, View,TextInput,TouchableHighlight,TouchableOpacity,Image} from 'react-native';
import  Login from '../component/login'

export default class reg_log extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Login/>
            </View>
            /*this.props.navigation.navigate('Logins')*/
        );
    }
}

const styles = StyleSheet.create({
    loginBody: {},
    loginUser: {
        height: 60,
        fontSize: 18,
        width: '80%',
        marginLeft: '10%',
        fontFamily: 'San Francisco'
    },
    loginPwd: {
        height: 60,
        fontSize: 18,
        width: '80%',
        marginLeft: '10%',
        marginBottom: 10,
        fontFamily: 'San Francisco'
    },
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: 'white',

    },
    titleReg: {
        marginLeft:'10%',
        fontSize:13,
        backgroundColor: 'white',
        width:60,
        marginTop:20
    },
    titleBody: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    }
});