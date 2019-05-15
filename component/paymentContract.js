import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import PaymentManageMessage from '../component/paymentManageMessage'


class panyment extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() =>this.props.navigation.navigate('paymentManageMsg')}>
                        <View style={styles.newContract}>
                            <View style={styles.contract}>
                                <Text style={styles.company}>
                                    合同名称
                                </Text>
                                <View style={styles.companyState}>
                                    <Text style={{color:'#ba3025'}}>
                                        $32.25
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.dataName}>
                                    编号
                                </Text>
                                <Text style={styles.dataDate}>
                                    2019/2/23
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.newContract}>
                            <View style={styles.contract}>
                                <Text style={styles.company}>
                                    合同名称
                                </Text>
                                <View style={styles.companyState}>
                                    <Text style={{color:'#ba3025'}}>
                                        $32.25
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.dataName}>
                                    编号
                                </Text>
                                <Text style={styles.dataDate}>
                                    2019/2/23
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const App = createStackNavigator(
    {
        paymentManageMsg:{
            screen:PaymentManageMessage,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                title: '付款合同详情',
                headerStyle:{
                    height:40,

                },
                headerTintColor:'#2A9BFF',
                headerTitleStyle:{
                    fontSize:15
                }
            }
        },
        panyMent:{
            screen:panyment,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
    },{
        initialRouteName: 'panyMent',
    });

const AppContainer = createAppContainer(App);
export default class paymentContract extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles = StyleSheet.create({
    newContract:{
        backgroundColor:'white',
        height:90,
        width:'94%',
        marginTop:10,
        marginLeft:'3%',
        borderRadius:12,
        flexDirection:'column',
        elevation: 5,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowRadius: 3,
        marginBottom: 10
    },
    companyState:{
        marginRight:15,
        fontSize: 15
    },
    company:{
        fontSize:20,
        color: 'black',
        fontFamily:'宋体',
        marginLeft:15
    },
    contract:{
        marginTop:12,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    details:{
    flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:18,
    },
    dataName:{
        marginLeft:15
    },
    dataDate:{
        marginRight:15
    },
})