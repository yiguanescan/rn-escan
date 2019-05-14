import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ListView,
    SectionList,
    ScrollView,
    Image} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';

export default class home extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
               <View style={styles.h_body}>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/hetongguanli.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>付款合同</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/hetongfukuan.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>付款管理</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/kaipiao.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>付款开票</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/hetong2.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>收款合同</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/shoukuan.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>收款管理</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/kaipiao2.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>收款开票</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                       <View style={styles.center}>
                           <Image source={require('./static/images/kehu.png')}
                                  style={styles.h_image}>
                           </Image>
                       </View>
                       <Text>客户管理</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.hetongguanli}>
                            <View style={styles.center}>
                                <Image source={require('./static/images/lianxiren.png')}
                                       style={styles.h_image}>
                                </Image>
                            </View>
                            <Text style={{width:60,textAlign: 'center'}}>联系人</Text>
                   </TouchableOpacity>
                   <View style={{height:85,backgroundColor:'#DEDEDE',marginBottom: 15}}/>
                </View>
                <View>
                    <View style={{marginTop:15,flexDirection:'row',}}>
                        <View style={{width:5,height:18,marginRight: 15,backgroundColor:'#2a9bff'}}/>
                        <Text style={{color:"#393939"}}>最新合同</Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom:15}}>
                    <View style={styles.newHetong}>
                        <View style={styles.hetongtit}>
                            <Text style={styles.company}>
                                劳动合同
                            </Text>
                            <TouchableOpacity style={styles.companystate}>
                                <Text style={{color:'#2A9BFF'}}>
                                    可编写
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.dataName}>
                                上海以观科技有限公司
                            </Text>
                            <Text style={styles.dataDate}>
                                2019/2/23
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newHetong}>
                        <View style={styles.hetongtit}>
                            <Text style={styles.company}>
                                房地产合同
                            </Text>
                            <TouchableOpacity style={styles.companystate}>
                                <Text style={{color:'#ba3025'}}>
                                    待发送
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.dataName}>
                                上海以观科技有限公司
                            </Text>
                            <Text style={styles.dataDate}>
                                2019/2/23
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newHetong}>
                        <View style={styles.hetongtit}>
                            <Text style={styles.company}>
                                实习合同
                            </Text>
                            <TouchableOpacity style={styles.companystate}>
                                <Text style={{color:'#35c738'}}>
                                    可查看
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.dataName}>
                                上海以观科技有限公司
                            </Text>
                            <Text style={styles.dataDate}>
                                2019/2/23
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newHetong}>
                        <View style={styles.hetongtit}>
                            <Text style={styles.company}>
                                实习合同
                            </Text>
                            <TouchableOpacity style={styles.companystate}>
                                <Text style={{color:'#35c738'}}>
                                    可查看
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.dataName}>
                                上海以观科技有限公司
                            </Text>
                            <Text style={styles.dataDate}>
                                2019/2/23
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    newHetong:{
        backgroundColor:'white',
        height:100,
        width:'94%',
        marginTop:15,
        marginLeft:'3%',
        borderRadius:15,
        flexDirection:'column',
    },
    companystate:{
        marginRight:15,
        fontSize: 15
    },
    details:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:20,
    },
    dataName:{
        marginLeft:15
    },
    dataDate:{
        marginRight:15
    },
    company:{
        fontSize:20,
        color: 'black',
        fontFamily:'宋体',
        marginLeft:15
    },
    hetongtit:{
        marginTop:15,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    h_body:{
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        backgroundColor:'white',
    },
    hetongguanli:{
        width:60,
        height:60,
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
        marginTop:15,

    },
    h_center:{
        alignItems:'center',
        justifyContent: 'center',
    },
    center:{
        justifyContent: 'center',
    },
    h_image:{
        width:50,
        height:50,
        marginLeft:'8%'
    }
})