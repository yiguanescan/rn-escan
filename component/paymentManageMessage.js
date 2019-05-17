import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TextInput,
    TouchableHighlight,
    ListView,
    Alert,
    AppRegistry,
    TouchableWithoutFeedback,
    SwipeableFlatList,
    TouchableOpacity
} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoadingImage from "../component/loadingImage";
import Swipeout from 'react-native-swipeout'
import PaymentInformation from '../component/paymentInformation'
import BillingInformationDetails from '../component/billingInformationDetails'
import PaymentContractUpdate from '../component/paymentContractUpdate'

const CITY_NAMES = ['北京', '上海', '广州','杭州', '苏州'];
const list = [
    {
        title: '合同编号',
        r_icon:'chevron-right',
    },
    {
        title: '合同名称',
        r_icon:'chevron-right',
    },
]

class paymentManageMeg extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            refresh: false,
            listData: []
        }
    }

    getNewData() {
        this.setState({
            refresh: true
        })
        let newData = []
        for (let i = 0; i < 2; i++) {
            newData.push('new data')
        }
        setTimeout(() => {
            this.setState({
                refresh: false,
                listData: [...newData, ...this.state.listData]
            })
        }, 1500)
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        let newData = []
        for (let i = this.state.listData.length; i < this.state.listData.length + 5; i++) {
            newData.push(i)
        }
        setTimeout(() => {
            this.setState({
                listData: [...this.state.listData, ...newData]
            })
        }, 1500)
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:15,flexDirection:'row',}}>
                            <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                            <Text style={{color:"#393939"}}>基本信息</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('PaymentContractUpdate')}
                            style={{marginTop:15,marginRight:'4%'}}>
                            <Image source={require('./static/images/xiugai.png')}
                                   style={{height:20,width:20}}/>
                        </TouchableOpacity>
                    </View>
                <View style={styles.basicInformation}>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            合同编号:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            合同名称:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                           甲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            乙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            签订时间:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            合同金额:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            审核结算:
                        </Text>
                        <Text style={styles.detailsRight}>
                            Y123456789
                        </Text>
                    </View>
                    <View style={styles.detailsLine}/>
                    <View style={styles.details}>
                        <Text style={styles.detailsLeft}>
                            描&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;述:
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
                            合同照片/附件:
                        </Text>
                        <Text style={styles.detailsRight}>
                            查看
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{marginTop:15,flexDirection:'row'}}>
                        <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:"#393939"}}>付款信息</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{marginTop:15,marginRight:'4%'}}>
                        <Image source={require('./static/images/tianjia.png')}
                               style={{height:20,width:20}}/>
                    </TouchableOpacity>
                </View>
                    <View style={styles.basicInformation}>
                        <Swipeout
                            backgroundColor={'white'}
                            right={swipeOut}>
                            <TouchableOpacity onPress={() =>this.props.navigation.navigate('PaymentIn')}>
                                <View style={styles.swipeOutS}>
                                    <View style={styles.payList}>
                                        <Image source={require('./static/images/付.png')}
                                                style={styles.paymentImg}/>
                                        <View style={styles.paymentNoBody}>
                                            <Text style={styles.paymentNo}>NO:123456</Text>
                                            <View style={styles.paymentDateBody}>
                                                <Text style={styles.paymentDate}>2019-10-12</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                  style={styles.rightArrows}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swipeout>
                        <View style={styles.detailsLine}/>
                        <Swipeout
                            backgroundColor={'white'}
                            right={swipeOut}>
                            <TouchableOpacity>
                                <View style={styles.swipeOutS}>
                                    <View style={styles.payList}>
                                        <Image source={require('./static/images/付.png')}
                                               style={styles.paymentImg}/>
                                        <View style={styles.paymentNoBody}>
                                            <Text style={styles.paymentNo}>NO:123456</Text>
                                            <View style={styles.paymentDateBody}>
                                                <Text style={styles.paymentDate}>2019-10-12</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                                                 style={styles.rightArrows}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swipeout>
                        <View style={styles.detailsLine}/>
                        <Swipeout
                            backgroundColor={'white'}
                            right={swipeOut}>
                            <TouchableOpacity>
                                <View style={styles.swipeOutS}>
                                    <View style={styles.payList}>
                                        <Image source={require('./static/images/付.png')}
                                               style={styles.paymentImg}/>
                                        <View style={styles.paymentNoBody}>
                                            <Text style={styles.paymentNo}>NO:123456</Text>
                                            <View style={styles.paymentDateBody}>
                                                <Text style={styles.paymentDate}>2019-10-12</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                                                 style={styles.rightArrows}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swipeout>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:15,flexDirection:'row',}}>
                            <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                            <Text style={{color:"#393939"}}>开票信息</Text>
                        </View>
                        <TouchableOpacity style={{marginTop:15,marginRight:'4%'}}>
                            <Image source={require('./static/images/tianjia.png')}
                                   style={{height:20,width:20}}/>
                        </TouchableOpacity>
                    </View>
                <View style={styles.basicInformation}>
                    <Swipeout
                        backgroundColor={'white'}
                        right={swipeOut}>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('BillingInDetails')}>
                            <View style={styles.swipeOutS}>
                                <View style={styles.payList}>
                                    <Image source={require('./static/images/票.png')}
                                           style={styles.invoiceImg}/>
                                    <View style={styles.paymentNoBody}>
                                        <Text style={styles.paymentNo}>编号:JSDF2839754930680214</Text>
                                        <View style={styles.paymentDateBody}>
                                            <Text style={styles.paymentDate}>2019-10-12</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                                             style={styles.rightArrows}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Swipeout>
                    <View style={styles.detailsLine}/>
                    <Swipeout
                        backgroundColor={'white'}
                        right={swipeOut}>
                        <TouchableOpacity>
                            <View style={styles.swipeOutS}>
                                <View style={styles.payList}>
                                    <Image source={require('./static/images/票.png')}
                                           style={styles.invoiceImg}/>
                                    <View style={styles.paymentNoBody}>
                                        <Text style={styles.paymentNo}>编号:JSDF2839754930680214</Text>
                                        <View style={styles.paymentDateBody}>
                                            <Text style={styles.paymentDate}>2019-10-12</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                                             style={styles.rightArrows}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Swipeout>
                    <View style={styles.detailsLine}/>
                    <Swipeout
                        backgroundColor={'white'}
                        right={swipeOut}>
                        <TouchableOpacity>
                            <View style={styles.swipeOutS}>
                                <View style={styles.payList}>
                                    <Image source={require('./static/images/票.png')}
                                           style={styles.invoiceImg}/>
                                    <View style={styles.paymentNoBody}>
                                        <Text style={styles.paymentNo}>编号:JSDF2839754930680214</Text>
                                        <View style={styles.paymentDateBody}>
                                            <Text style={styles.paymentDate}>2019-10-12</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rightArrowsBody}><Image  source={require('./static/images/右箭头.png')}
                                                                             style={styles.rightArrows}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Swipeout>
                </View>
            </ScrollView>
            </View>
        )
    }
}
const swipeOut= [
    {
        text: '修改',
        backgroundColor:'#2a9bff'
    },
    {
        text: '删除',
        backgroundColor:'#eb4337'
    }
]
const App = createStackNavigator(
    {
        paymentManageMeg: {
            screen:paymentManageMeg,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        PaymentIn: {
            screen:PaymentInformation,
            headerMode:'float',
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        PaymentContractUpdate:{
            screen:PaymentContractUpdate,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        BillingInDetails:{
            screen:BillingInformationDetails,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        LoadingImage:{
            screen:LoadingImage,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        }
    },{
        initialRouteName: 'paymentManageMeg',
    });

const AppContainer = createAppContainer(App);
export default class paymentManageMessage extends React.Component {
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