import React from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import { Button} from 'react-native-elements';
import RegisterScreen from '../component/register';
import InTopB from '../component/inT_B';
import Global from  './Global';

 class loginScreen extends React.Component {

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
        let url = Global.adminPath + "/login";
        let postData = {
            'userName': this.state.userName,
            'password': this.state.password
        };
        console.log(url);
        const init ={
            method: "POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json;charset=UTF-8'
            },
            body: JSON.stringify(postData)
        };
        console.log(JSON.stringify(postData));
        fetch(url,init)
            .then((response)=>response.json())
            .then((responseJson)=>{
                alert(JSON.stringify(responseJson));
                this.props.navigation.navigate('index');
            })
            .catch(e =>{
                /*alert('error',${e});*/
                console.log(e);
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
                <View style={{justifyContent:'center' ,alignItems:'center'}}>
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
                               secureTextEntry={true}
                               editable={true}//是否可编辑
                               underlineColorAndroid='#E5E5E5'
                               onChangeText={(inputValue) =>this._onChangePasswordText(inputValue)}
                    />
                </View>
                <TouchableOpacity >
                    <Button
                        title="登&nbsp;&nbsp;&nbsp;&nbsp;录"
                        buttonStyle={{borderRadius:5, height:50,width:'80%',justifyContent:'center' , alignItems:'center',marginLeft:'10%', marginTop: 15}}
                        onPress={() =>this.userLogin()}
                    />
                </TouchableOpacity>
                    <TouchableOpacity style={styles.titleReg}
                                        onPress={() =>this.props.navigation.navigate('Registers')}
                                        underlineColorAndroid="white"
                                        >{/*{() =>this.props.navigation.navigate('Registers')}*/}
                        <Text style={{color:'#63B8FF'}}
                              >注册</Text>
                    </TouchableOpacity>
                <View style={{justifyContent: 'center', alignItems: 'center',flex: 1,flexDirection: 'row',marginTop:'20%'}}>
                    <Image
                        source={require('./static/images/qq.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',marginLeft:30,marginRight:30}}
                    />
                    <Image
                        source={require('./static/images/weixin.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',marginLeft:30,marginRight:30}}
                    />
                    <Image
                        source={require('./static/images/weibo.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center',marginLeft:30,marginRight:30}}
                    />
                </View>
            </View>
        );
    }
}

const App = createStackNavigator(
    {
        login: {
            screen:loginScreen,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        Registers:{
            screen:RegisterScreen,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        index:{
            screen:InTopB,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        }
    },{
    initialRouteName: 'login',
});

const AppContainer = createAppContainer(App);
export default class login extends React.Component {
   render() {
        return <AppContainer />;
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
        fontSize:13,
        backgroundColor: 'white',
        width:40,
        marginTop:20
    },
    titleBody:{
        flex:1,
        flexDirection:'row',
        marginTop:20
    }
});