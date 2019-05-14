import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    SectionList,
    Alert,
    Image} from 'react-native';
import { ListItem } from 'react-native-elements'

export default class myPage extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{height:'25%',backgroundColor:'#2a9bff',flexDirection:'row',justifyContent: 'flex-start'}}>
                    <View style={{width:120,height:120,backgroundColor:'width',marginTop:'8%',marginLeft:'10%',alignItems:'center'}}>
                        <Image
                            source={require('./static/images/touxiang.jpg')}
                            style={{width:120,height:120,borderRadius:80}}></Image>
                    </View>
                    <View style={{marginTop:'12%',marginLeft:30,flexDirection:'column',}}>
                        <Text style={{fontSize:30,color:'white',fontFamily:'幼圆'}}>王小五</Text>
                        <Text style={{fontSize:15,color:'white',fontFamily:'幼圆',marginTop:10}}>上海以观科技有限公司</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                rightIcon={{ name: item.r_icon }}
                                onPress={()=>Alert.alert(item.url)}
                            />
                        ))
                    }
                </View>
            </View>
        )
    }
}
const list = [
    {
        title: '修改资料',
        icon: 'person',
        r_icon:'chevron-right',
        url:'111'
    },
    {
        title: '设置',
        icon: 'settings',
        r_icon:'chevron-right',
        url:'222'
    },
]