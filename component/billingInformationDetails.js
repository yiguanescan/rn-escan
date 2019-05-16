import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    SectionList,
    Alert,Dimensions,
    Image, TextInput,ScrollView
} from 'react-native';
var {width,height} = Dimensions.get("window");//第一种写法
export default class billingInformationDetails extends React.Component{
    render(){
        return(
            <View  style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>开票金额：</Text>
                            <Text style={{marginRight:'3%',fontSize:15}}>123456</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>开票时间：</Text>
                            <Text style={{marginRight:'3%',fontSize:15}}>2019-12-23</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>发票编号：</Text>
                            <Text style={{marginRight:'3%',fontSize:15}}>J12d31513455454</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>发票序号：</Text>
                            <Text style={{marginRight:'3%',fontSize:15}}>8235448512</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>购买方名称：</Text>
                            <Text style={{marginRight:'3%',fontSize:15}}>王小五</Text>
                        </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>购买方纳税人识别号：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>D21354135814325135</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>购买方地址电话：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>13333325547</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>购买方开户行和账号：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>123654874684154684684654864</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>销售方名称：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>王小五</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>销售方纳税人识别号：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>asd15468454841385483</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>销售方地址电话：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>12222254687</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>销售方开户费和账号：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>1215145831515813814814541351</Text>
                    </View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                            <Text style={{marginLeft:'3%',fontSize:15}}>备注信息✎</Text>
                        </View>
                        <View style={{borderTopWidth: 0,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ededed'}}/>
                        <View style={{marginBottom: 10,flexWrap: 'wrap',}}>
                            <TextInput style={{ fontSize:12,color:'#b4b4b4',marginLeft: '3%',flexWrap: 'wrap',paddingVertical: 1, paddingLeft: 5}}
                                       placeholder = {'内容为空'}
                                       placeholderTextColor = {'#bbbbbb'}
                                       underlineColorAndroid = {'transparent'}
                                       multiline
                                       editable={false}
                                       value={'撒大声地实打实大师大师低洼地骄傲滴就爱我了的骄傲的就我俩几点来我觉得来为大家拉我'}
                            >
                            </TextInput>
                            <View style={{borderTopWidth: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ededed'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                                <Text style={{marginLeft:'3%',fontSize:15}}>付款凭证：</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'white',marginTop:10}}>

                            <View>
                                <Image source={require('./static/images/hetong1jpg.jpg')}
                                       resizeMode ='contain'
                                       style={{width:width,height:height,marginTop:10,marginBottom:10}}
                                />

                            </View>
                            <View>
                                <Image source={require('./static/images/hetong2.jpg')}
                                       resizeMode ='contain'
                                       style={{width:width,height:height,marginTop:10,marginBottom:10,}}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}