import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import PayContract from '../component/paymentContract'
import PaymentDrawer from '../component/paymentDrawer/paymentDrawer'
import PaymentManage from '../component/paymentManage/paymentManage'
import GatContract from '../component/gatheringContract/gatheringContract'
import GatheringDrawer from '../component/gatheringDrawer/gatheringDrawer'
import GatheringManage from '../component/gatheringManage/gatheringManage'
import ClientManage from '../component/clientManage/clientManage'
import Linkman from '../component/linkman/linkman'

export default class pact extends React.Component{
    render(){
        return(
            <ScrollableTabView
                tabBarUnderlineStyle={{backgroundColor:'#fff'}}
                tabBarInactiveTextColor='#9c9c9c' // 没有被选中的文字颜色
                tabBarActiveTextColor='#2a9bff'       // 选中的文字颜色
                tabBarBackgroundColor='white'     // 选项卡背景颜色
                tabBarUnderlineStyle={{backgroundColor:'#2a9bff',height:1}}   //下划线的样式
                renderTabBar={() => <ScrollableTabBar style={{height: 40,borderWidth:0,elevation:2}} tabStyle={{height: 39}}
                                                      underlineHeight={2}/>}
                locked={true}
            >
                <PayContract

                    tabLabel="付款合同" />
                <PaymentDrawer tabLabel="付款开票" />
                <PaymentManage tabLabel="付款管理" />
                <GatContract tabLabel="收款合同" />
                <GatheringDrawer tabLabel="收款开票" />
                <GatheringManage tabLabel="收款管理" />
                <ClientManage tabLabel="客户管理" />
                <Linkman tabLabel="联系人" />
            </ScrollableTabView>
        )
    }
}