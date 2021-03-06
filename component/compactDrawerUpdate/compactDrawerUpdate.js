import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    DatePickerAndroid,
    TouchableHighlight,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {createAppContainer, createStackNavigator} from "react-navigation";
import ImageDetails from '../imageDetails/imageDetails'
import {Button} from "react-native-elements";

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={[styles.buttonText]}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
class compactDrawerUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "12.32",
            MValue:'',
            avatarSource: [],
            array:[],
            videoSource: null,
            i:0,
            presetDate: new Date(),
            presetText: this.formateDate(new Date()),
            uri:''
        }
    }

    render(){
        return(
            <View  style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>发票编号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入发票编号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='A12314545158'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>发票序号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入发票序号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='J25418615131'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>购买方名称：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入购买方名称"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='王小五'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>购买方纳税人识别号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入购买方纳税人识别号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='A131531dwada3513135'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>购买方地址电话：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入购买方地址电话"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='1321546846546'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>购买方开户行和账号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入购买方开户行和账号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='sS51531351384138'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>销售方名称：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入销售方名称"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='王小五'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>销售方纳税人识别号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入销售方纳税人识别号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue=''
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>销售方地址电话：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入销售方地址电话"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue=''
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>销售方开户费和账号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入销售方开户费和账号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue=''
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>开票时间：</Text>
                            <CustomButton  text={this.state.presetText} onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}>
                                <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                </View>
                            </CustomButton>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>开票金额：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入开票金额"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    onChangeText={(text) => {
                                        let newText = (text != '' && text.substr(0,1) == '.') ? '' : text;
                                        /*newText = newText.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
                                        //可以打印看看是否过滤掉了非数字
                                        console.log(newText)*/
                                        console.log(newText)
                                        this.setState({MValue: newText})
                                    }}
                                    onBlur={()=>{//||!this.state.MValue.matches(/[^\d.]/g)
                                        var str = this.state.MValue;
                                        var len1 = str.substr(0, 1);
                                        var len2 = str.substr(1, 1);
                                        //如果第一位是0，第二位不是点，就用数字把点替换掉
                                        if (str.length > 1 && len1 == 0 && len2 != ".") {
                                            this.setState({inputValue: this.state.inputValue})
                                            alert('输入格式错误');
                                            return false
                                        }
                                        //第一位不能是.
                                        if (len1 == ".") {
                                            this.setState({inputValue: this.state.inputValue})
                                            alert('输入格式错误');
                                            return false
                                        }
                                        //限制只能输入一个小数点
                                        if (str.indexOf(".") != -1) {
                                            var str_ = str.substr(str.indexOf(".") + 1);
                                            if (str_.indexOf(".") != -1) {
                                                this.setState({inputValue: this.state.inputValue})
                                                /*str = str.substr(0, str.indexOf(".") + str_.indexOf(".") + 1);*/
                                                alert('输入格式错误');
                                                return false
                                            }

                                        }
                                        if(str.replace(/[^a-zA-Z]/g, '').length>0){
                                            this.setState({inputValue: this.state.inputValue})
                                            alert('输入格式错误');
                                            return false
                                        }
                                        this.state.inputValue=this.state.MValue
                                    }}
                                    defaultValue={this.state.inputValue}
                                />
                            </View>
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
                                       defaultValue={'撒大声地实打实大师大师低洼地骄傲滴就爱我了的骄傲的就我俩几点来我觉得来为大家拉我'}
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

                            <View style={styles.container}>
                                <TouchableOpacity style={styles.item} onPress={this.selectPhotoTapped.bind(this)}>
                                    <Image style={{width:120,height: 120}} source={require('../static/images/shangchuan.png')}></Image>
                                </TouchableOpacity>
                                <View style={[styles.avatarContainer, {marginBottom: 30}]}>
                                    <ScrollView horizontal>
                                        {
                                            this.selectPhoto()
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={{marginBottom: 30}}>
                                <TouchableOpacity >
                                    <Button
                                        title="保&nbsp;&nbsp;&nbsp;&nbsp;存"
                                        buttonStyle={{borderRadius:5, height:50,width:'94%',justifyContent:'center' , alignItems:'center',marginLeft:'3%', marginTop: 15}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    async showPicker(stateKey, options) {
        try {
            var newState = {};
            var date = new Date();
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                /* newState[stateKey + 'Text'] = date;*/
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }
    /*state = {
        avatarSource: [],
        array:[],
        videoSource: null,
        i:0,

    };*/
    formateDate(date) {
        var year = date.getFullYear() ;
        var month = date.getMonth() +1 ;
        var day = date.getDate() ;
        var formatedStr = year + '/' + month +'/' + day ;
        // console.log('formatedStr: ' + formatedStr ) ;
        return formatedStr ;
    }
    //选择图片
    selectPhotoTapped() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '打开相册',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.state.avatarSource.push([source])
                this.setState({
                });
            }
        });

    }
    selectPhoto(){
        var pages=[]
        {this.state.avatarSource.map((key,i)=>{
            pages.push( <TouchableOpacity key={i} onLongPress={()=>this.longPress(i)} onPress={()=>this.props.navigation.navigate('imageDetails',{imgUrl: {key}})}>
                <Image style={styles.avatar} key={i} source={key} />
            </TouchableOpacity>);
        })}
        return pages
    }

    //删除方法
    longPress(i){
        Alert.alert('请选择','是否删除该图片?',
            [
                {
                    text: "确认",
                    onPress:async()=>{
                        let listData = this.state.avatarSource;
                        listData.splice(i,1)
                        this.setState({
                            avatarSource:listData
                        })
                    }
                },
                {text:"取消"},
            ]
        );
    }
    state = {
        index: 0,
        modalVisible: true
    };
}

const App = createStackNavigator(
    {
        compactDrawerUp: {
            screen:compactDrawerUp,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        },
        imageDetails:{
            screen:ImageDetails,
            navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                header: null,  //隐藏导航栏
            }
        }
    },{
        initialRouteName: 'compactDrawerUp',
    });

const AppContainer = createAppContainer(App);
export default class compactDrawerUpdate extends React.Component {
    render() {
        return <AppContainer />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    avatarContainer: {
        /*borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),*/
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    avatar: {
        width:200,
        height: 120
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }

});
