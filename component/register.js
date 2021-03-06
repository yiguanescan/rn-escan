import React, {Component} from 'react';
import {AppRegistry,Platform,Alert, StyleSheet, Text, View,TextInput,TouchableHighlight,TouchableOpacity,Image} from 'react-native';
import {StackNavigator,createAppContainer,createStackNavigator,createSwitchNavigator,NavigationActions,StackActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';
import reg_log from "./reg_log";
import Index from '../component/inT_B';

class registerScreen extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('./static/images/logo.png')}
                        style={{width: 400, height: 400, justifyContent: 'center', alignItems: 'center'}}
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
                               secureTextEntry={true}
                               underlineColorAndroid='#E5E5E5'
                    />
                    <TextInput style={styles.loginPwd}
                               placeholder="确认密码"
                               editable={true}//是否可编辑
                               secureTextEntry={true}
                               underlineColorAndroid='#E5E5E5'
                    />
                </View>
                <ThemeProvider>
                    <Button
                        title="注&nbsp;&nbsp;&nbsp;&nbsp;册"
                        buttonStyle={{
                            borderRadius: 5,
                            height: 50,
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '10%',
                            marginTop: 15
                        }}
                        onPress={() =>this.props.navigation.navigate('index')}
                    />
                </ThemeProvider>
                <TouchableOpacity style={styles.titleReg}
                                  onPress={() =>this.props.navigation.popToTop()}
                                  underlineColorAndroid="white"
                >
                    <Text style={{color: '#63B8FF'}}
                    >去登录</Text>
                </TouchableOpacity>
            </View>
        /*this.props.navigation.navigate('Logins')*/
        );
    }
}

const aa = createStackNavigator(
    {
        register:{
            screen:registerScreen,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        goLogin:{
            screen:reg_log,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                tabBarVisible: false, // 隐藏底部导航栏
                header: null,  //隐藏导航栏
            }
        },
        index:{
            screen:Index,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        }
    },{
        initialRouteName: 'register',
        navigationOptions:{
            header:null,
        },
    });

const App = createAppContainer(aa);
export default App;
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