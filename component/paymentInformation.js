import React from 'react';
import {
    Text,
    View,
    Dimensions,
    Image, TextInput,ScrollView
} from 'react-native';
var {width,height} = Dimensions.get("window");//第一种写法
export default class paymentInformation extends React.Component{
    render(){
        return(
            <View  style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                <View style={{backgroundColor:'white',marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>付款金额：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>123456</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>付款时间：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>2019-12-23</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>经办人：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>张三</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:10}}>
                        <Text style={{marginLeft:'3%',fontSize:15}}>收款方：</Text>
                        <Text style={{marginRight:'3%',fontSize:15}}>李四</Text>
                    </View>
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