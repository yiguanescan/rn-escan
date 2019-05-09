import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Button,
    ThemeProvider
} from 'react-native-elements';

export default class login extends Component {

    constructor(props){
        super(props);

        this.state = {
            userName:null,
            password:null
        };

    }

    //加载时运行
    componentWillMount(){
        //TODO 加载时判断是否存在session
    }
    //点击登录事件
    userLogin(){
        let url = "http://localhost:8080/index";
        const init ={
            method: "POST",
            header:{
                'Accept':'application:json',
                'Content-Type':'application:json'
            }

        };
        fetch(url,init)
            .then((response)=>response.json())
            .then((responseJson)=>{

            })
            .catch(e =>{
                alert('error',${e});
            })
    }

    _onChangeUserNameText(inputValue){
        this.setState({
            userName:inputValue
        })
    }
    _onChangePasswordText(inputValue) {
        this.setState({
            password: inputValue
        })
    }

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
                               onChangeText={(inputValue) =>this._onChangeUserNameText(inputValue)}//输入框改变触发的函数
                    />
                    <TextInput style={styles.loginPwd}
                               placeholder="密码"
                               editable={true}//是否可编辑
                               underlineColorAndroid='#E5E5E5'
                               onChangeText={(inputValue) =>this._onChangePasswordText(inputValue)}
                    />

                </View>
                <ThemeProvider>
                    <Button
                        title="登&nbsp;&nbsp;&nbsp;&nbsp;录"
                        buttonStyle={{
                            borderRadius: 5,
                            height: 50,
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '10%',
                            marginTop: 15
                        }}
                        onPress={() =>this.userLogin()}
                    />
                </ThemeProvider>
                <View style={styles.titleBody}>
                    <TouchableOpacity style={styles.titleReg}>
                        <Text style={{color: '#63B8FF'}}>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
        marginLeft: '10%',
        fontSize: 13
    },
    titleBody: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    }
});