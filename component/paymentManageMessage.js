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



    //侧滑菜单渲染
    getQuickActions=()=>{
        return <View style={styles.quickAContent}>
            <TouchableHighlight
                onPress={()=>alert("确认删除？")}
            >
                <View style={styles.quick}>
                    <Text style={styles.delete}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
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
                <View style={styles.basicInformation}>
                    <View style={styles.container}>
                        <SwipeableFlatList
                            //1数据的获取和渲染
                            data={CITY_NAMES}
                            renderItem={(data) =>   <View style={styles.item}>
                                <Text style={styles.text}>{data.item}</Text>
                            </View>}

                            //2创建侧滑菜单
                            renderQuickActions={()=>this.getQuickActions()}//创建侧滑菜单
                            maxSwipeDistance={80}//可展开（滑动）的距离
                            // bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const App = createStackNavigator(
    {
        paymentManageMeg: {
            screen:paymentManageMeg,
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
        borderBottomColor: '#DEDEDE'
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

    item: {
        backgroundColor: '#aeffb1',
        height: 100,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,//漂浮的效果
        borderRadius:5,//圆角
    },
    text: {
        color: '#444444',
        fontSize: 20,
    },
    //侧滑菜单的样式
    quickAContent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:15,
        marginBottom:10,
    },
    quick:{
        backgroundColor:"#ff1d49",
        flex:1,
        alignItems:'flex-end',//水平靠右
        justifyContent:'center',//上下居中
        width:100,
        borderRadius:5,
        elevation:5,//漂浮的效果

    },
    delete:{
        color:"#d8fffa",
        marginRight:30
    }
})