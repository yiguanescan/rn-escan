import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import PaymentManageMessage from '../component/paymentManageMessage'
import PaymentContractAdd from '../component/paymentContractAdd/paymentContractAdd'


class panyment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lists:[{'id':'合同编号1','name':'合同名称1','date':'2019-12-03','money':'32.65'},{'id':'合同编号2','name':'合同名称2','date':'2019-1-03','money':'54.65'}]
        }
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:15,flexDirection:'row',}}>
                            <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                            <Text style={{color:"#393939"}}>合同列表</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('paymentContractInsert')}
                            style={{marginTop:15,marginRight:'3%'}}>
                            <Image source={require('./static/images/jia2.png')}
                                   style={{height:20,width:20}}/>
                        </TouchableOpacity>
                    </View>
                    {
                        this.showList()
                    }
                </ScrollView>
            </View>
        )
    }
    showList(){
        var pages = []
        {
            this.state.lists.map((key,i)=>{
                pages.push(
                    <TouchableOpacity
                        key={i}
                        onLongPress={()=>this.longPress(i)}
                        onPress={() =>this.props.navigation.navigate('paymentManageMsg')}>
                        <View style={styles.newContract}>
                            <View style={styles.contract}>
                                <Text style={styles.company}>
                                    {key.name}
                                </Text>
                                <View style={styles.companyState}>
                                    <Text style={{color:'#ba3025'}}>
                                        ${key.money}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.dataName}>
                                    {key.id}
                                </Text>
                                <Text style={styles.dataDate}>
                                    {key.date}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
        return pages
    }
    longPress(i){
        Alert.alert('请选择','确认是否删除？',
            [
                {
                    text:'确认',
                    onPress:async()=>{
                        let listData = this.state.lists;
                        listData.splice(i,1)
                        this.setState({
                            lists:listData
                        })
                    }
                },{
                    text: '取消'
            }
            ])
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
                },
                gesturesEnabled: false,
                gestures: null
            }
        },
        paymentContractInsert:{
            screen:PaymentContractAdd,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                title: '付款合同添加',
                headerStyle:{
                    height:40,

                },
                headerTintColor:'#2A9BFF',
                headerTitleStyle:{
                    fontSize:15
                },
                gesturesEnabled: false,
                gestures: null
            }
        },
        panyMent:{
            screen:panyment,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏,
                gesturesEnabled: false,
                gestures: null

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
        shadowColor: 'grey',
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