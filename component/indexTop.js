import React from 'react';
import {
    StyleSheet,
    Text,
    View} from 'react-native';

export default class indexTop extends React.Component{
    /**
     *-------------标题栏-----------------
     *
     * centerText  ------------------标题文字
     * centerTextStyle ---------标题文字样式(为undefind,显示默认样式)
     *
     * rightText--------------------标题栏右边文字
     * rightPress---------------标题栏右边文字点击事件
     * rightImg----------------标题栏右边图片
     * rightImgPress---------标题栏右边图片点击事件
     *
     * isShowLeftBackIcon  ----是否显示左边图片
     * leftPress------------标题栏左边点击事件(为空,点击返回上个页面,否则点击执行传过来的事件)
     *
     * backgroundColor-----背景色
     *
     *lineHeight--------分割线的高
     */

    constructor(props) {
        super(props);
        this.state = {
            centerText: '以观科技',
        }
    }
    render() {
        const {centerText,lineHeight,backgroundColor,leftPress} = this.state;
        return (
            <View >
                <View style={{
                    height:50,
                    borderBottomWidth: lineHeight,
                    backgroundColor:backgroundColor,
                    leftPress:leftPress
                }}>
                    <View style={styles.containerText}>
                        <Text style={styles.titleBody}>{centerText}</Text>
                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleBody:{
        color:'white',
        fontSize:20,
        fontFamily:'San Francisco',
        letterSpacing:4
    },
    containerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 44,
        backgroundColor:'#2a9bff'
    },
    TouchableOpacityLeftText: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    leftImage: {
        width: 44,
        height: 44,
    },
    TouchableOpacityRightText: {
        position: 'absolute',
        right: 15,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },

    TouchableOpacityRightImgview: {
        position: 'absolute',
        right: 0,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    rightTxt: {
        fontSize: 15,
    },
    rightImage: {
        width: 30,
        height: 30,
    },

});