import React from 'react';
import {
        StyleSheet,
        Text,
        View,
        Image} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../component/home'
import MyPages from '../component/myPage'

class Home extends React.Component{
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./static/images/首页.png') : require('./static/images/首页.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
               <HomeScreen/>
        );
    }
}
class Operation extends React.Component{
    static navigationOptions={
        tabBarLabel:'操作',
        tabBarIcon:({focused,tintColor}) => (
            <Image
                source={focused ? require('./static/images/报告.png') : require('./static/images/报告.png')}
                style={{width:26,height:26,tintColor}}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>这是操作</Text>
            </View>
        )
    }
}
class MyPage extends React.Component{
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./static/images/我的.png') : require('./static/images/我的.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <MyPages/>
        );
    }
}
class Contract extends React.Component{
    static navigationOptions= {
        tabBarLabel: '合同',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                source={focused ? require('./static/images/contract.png') : require('./static/images/contract.png')}
                style={{width: 26, height: 26, tintColor}}
            />
        )
    };
    render(){
        return(
            <View style={styles.container}>
                <Text>这是合同</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

const App = createBottomTabNavigator(
    {
        index:{
            screen: Home
        },
        contract:{
            screen:Contract
        },
        operation:{
            screen:Operation
        },
        myself:{
            screen: MyPage
        },
    },{
        tabBarOptions: {
            activeTintColor: '#2092d2',
            inactiveTintColor: '#9c9c9c',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
}

);
const AppContainer = createAppContainer(App);

export default class index extends React.Component {
    render() {
        return(
        <AppContainer />
        )
    }
}