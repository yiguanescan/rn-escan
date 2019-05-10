
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Button, ThemeProvider } from 'react-native-elements';

import  IndexTop from './indexTop'
import  Index from './index'

export default class inT_B extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <IndexTop/>
                <Index/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

