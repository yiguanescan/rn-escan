import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoadingImage from "../loadingImage";
import paymentDrawerUp from '../paymentDrawerUpdate/paymentDrawerUpdate'

class paymentDrawerDe extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:15,flexDirection:'row',}}>
                            <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                            <Text style={{color:"#393939"}}>付款信息</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('paymentDrawerUp')}
                            style={{marginTop:15,marginRight:'4%'}}>
                            <Image source={require('../static/images/xiugai.png')}
                                   style={{height:20,width:20}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.basicInformation}>
                        <View style={styles.details}>
                            <Text style={styles.detailsLeft}>
                                付款金额:
                            </Text>
                            <Text style={styles.detailsRight}>
                                Y123456789
                            </Text>
                        </View>
                        <View style={styles.detailsLine}/>
                        <View style={styles.details}>
                            <Text style={styles.detailsLeft}>
                                时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间:
                            </Text>
                            <Text style={styles.detailsRight}>
                                Y123456789
                            </Text>
                        </View>
                        <View style={styles.detailsLine}/>
                        <View style={styles.details}>
                            <Text style={styles.detailsLeft}>
                                经&nbsp;&nbsp;办&nbsp;&nbsp;人:
                            </Text>
                            <Text style={styles.detailsRight}>
                                Y123456789
                            </Text>
                        </View>
                        <View style={styles.detailsLine}/>
                        <View style={styles.details}>
                            <Text style={styles.detailsLeft}>
                                收&nbsp;&nbsp;款&nbsp;&nbsp;方:
                            </Text>
                            <Text style={styles.detailsRight}>
                                Y123456789
                            </Text>
                        </View>
                        <View style={styles.detailsLine}/>
                        <View style={styles.details}>
                            <Text style={styles.detailsLeft}>
                                备注信息:
                            </Text>
                        </View>
                        <View style={styles.detailsLine}/>
                        <View style={{marginBottom: 10,flexWrap: 'wrap',}}>
                            <TextInput style={{ fontSize:16,color:'grey',fontFamily:'黑体',marginLeft: '3%',flexWrap: 'wrap',paddingVertical: 1, paddingLeft: 5}}
                                       placeholder = {'内容为空'}
                                       placeholderTextColor = {'#bbbbbb'}
                                       underlineColorAndroid = {'transparent'}
                                       multiline
                                       editable={false}
                                       value={''}
                            >
                            </TextInput>
                        </View>

                    </View>
                    <View style={styles.basicInformation}>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('LoadingImage')}>
                            <View style={styles.details}>
                                <Text style={styles.detailsLeft}>
                                    付款凭证/附件:
                                </Text>
                                <Text style={styles.detailsRight}>
                                    查看
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const App = createStackNavigator(
    {
        paymentDrawerDe: {
            screen:paymentDrawerDe,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        LoadingImage:{
            screen:LoadingImage,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        paymentDrawerUp:{
            screen:paymentDrawerUp,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        }
    },{
        initialRouteName: 'paymentDrawerDe',
    });

const AppContainer = createAppContainer(App);
export default class paymentDrawerDetails extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles = StyleSheet.create({
    basicInformation:{
        backgroundColor:'white',
        width:'94%',
        marginLeft:'3%',
        marginTop:15,
        marginBottom:10,
        borderRadius:15,
        flexDirection:'column',

    },
    details:{
        marginTop: 10,
        marginBottom: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    detailsLine:{
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed'
    },
    detailsLeft:{
        fontSize:20,
        color:'black',
        fontFamily:'黑体',
        marginLeft: '3%',
    },
    detailsRight:{
        fontSize:20,
        color:'gray',
        fontFamily:'黑体',
        marginRight: '3%',
    },

    swipeOutS:{
        marginTop:10,
        marginBottom:10,
        marginLeft:'3%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rightArrowsBody:{
        marginRight:10,marginTop:'3%'
    },
    rightArrows:{
        width:15,height:15
    },
    paymentDate:{
        marginLeft:'5%',marginRight:'5%',fontSize:10
    },
    paymentDateBody:{
        backgroundColor:'#e7e7e7',borderRadius: 10,alignSelf:'flex-start'
    },
    paymentNo:{
        fontSize:20,color:'black',fontFamily:'黑体',alignItems:'center'
    },
    paymentNoBody:{
        flexDirection:'column'
    },
    paymentImg:{
        width:35,height:35,marginRight:10,marginTop:'4%'
    },
    invoiceImg:{
        width:35,height:35,marginRight:10,marginTop:'1%'
    },
    payList:{
        flexDirection:'row'
    }
})