import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    TouchableOpacity,
    PixelRatio,
    WebView,
    Modal,
    ImageBackground,
    Alert,
    Input,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';

var {width,height} = Dimensions.get("window");//第一种写法
export default class paymentContractUpdate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "12.32",
        }
    }
    render(){
        return(
            <View  style={{flex:1,backgroundColor:'#eeeeee'}}>
                <ScrollView>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>合同编号：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入合同编号"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='D1231541513515464'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>合同名称：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入合同名称"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='劳动合同'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>甲方：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入甲方名称"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='张三'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>乙方：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入乙方名称"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='王小五'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:10}}>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>签订时间：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                           placeholder="请输入签订时间"
                                           editable={true}//是否可编辑
                                           underlineColorAndroid='#E5E5E5'
                                           style={{fontSize:14,height: 40}}
                                           defaultValue='2019-12-21'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>合同金额：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入合同金额"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    onChangeText={(text) => {
                                        const newText = text.replace(/[^\d]+/, '');
                                        //可以打印看看是否过滤掉了非数字
                                        console.log(newText)
                                        this.setState({inputValue: newText})
                                    }}
                                    defaultValue={this.state.inputValue}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginLeft:'3%',fontSize:15,marginTop:10,marginBottom:10}}>审核结算：</Text>
                            <View style={{marginLeft:'3%',marginRight:'3%',fontSize:15}}>
                                <TextInput
                                    placeholder="请输入审核结算金额"
                                    editable={true}//是否可编辑
                                    underlineColorAndroid='#E5E5E5'
                                    style={{fontSize:14,height: 40}}
                                    defaultValue='12315.1235'
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
                                            <Image style={{width:120,height: 120}} source={require('../component/static/images/shangchuan.png')}></Image>
                                </TouchableOpacity>
                                <View style={[styles.avatarContainer, {marginBottom: 30}]}>
                                    <ScrollView horizontal>
                                        {
                                            this.selectPhoto()
                                        }
                                    </ScrollView>
                                    </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    state = {
        avatarSource: [],
        videoSource: null,
        i:0,

    };
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
                this.setState({
                    avatarSource: [source]
                });
            }
        });

    }
    selectPhoto(){
        let images = this.state.avatarSource;
        if(flug){
            flug=false
            return pages
        }else{
            pages.push( <TouchableOpacity onPress={()=>this.magnifyImage(images)}><Image style={styles.avatar} source={images} /></TouchableOpacity>);
        }
        return pages
    }
    state = {
        index: 0,
        modalVisible: true
    };
    magnifyImage(images){
        const html = `<img src="${images}" style="width:100%;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"/>`;
        xianshi=(<View style={{flex: 1}}><WebView
            source={{
                html:html,
                baseUrl: ''
            }}/></View>);
        return  xianshi
    }
}
var xianshi=null;
var flug=true
var pages=[]
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


});
