
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';

export default class login extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={{justifyContent:'center' ,alignItems:'center'}}>
                    <Image
                        source={require('./static/images/logo.png')}
                        style={{width:400,height:400,justifyContent:'center' ,alignItems:'center'}}
                    />
                </View>
                <View style={styles.loginBody}>

                    <TextInput style={styles.loginUser}
                        placeholder="手机号/邮箱/用户名"
                        editable={true}//是否可编辑
                        underlineColorAndroid='#E5E5E5'
                    />
                    <TextInput style={styles.loginPwd}
                                 placeholder="密码"
                                 editable={true}//是否可编辑
                                 underlineColorAndroid='#E5E5E5'
                />

                </View>
                <ThemeProvider >
                    <Button
                        title="登&nbsp;&nbsp;&nbsp;&nbsp;录"
                        buttonStyle={{borderRadius:5, height:50,width:'80%',justifyContent:'center' , alignItems:'center',marginLeft:'10%', marginTop: 15}}
                    />
                </ThemeProvider>
                <View style={styles.titleBody}>
                    <TouchableOpacity style={styles.titleReg}>
                        <Text style={{color:'#63B8FF'}}>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    loginBody:{
    },
    loginUser:{
        height:60,
        fontSize:18,
        width:'80%',
        marginLeft:'10%',
        fontFamily:'San Francisco'
    },
    loginPwd:{
        height:60,
        fontSize:18,
        width:'80%',
        marginLeft:'10%',
        marginBottom:10,
        fontFamily:'San Francisco'
    },
    body:{
        margin:0,
        padding:0,
        backgroundColor:'white',

    },
    titleReg:{
        marginLeft:'10%',
        fontSize:13
    },
    titleBody:{
        flex:1,
        flexDirection:'row',
        marginTop:20
    }
});