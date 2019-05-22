import React, {PureComponent, Component} from 'react'
import {View, Modal,Navigator,Text,Image} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

/*const images = [{
    url: "file:///storage/emulated/0/Android/data/com.escan/files/Pictures/image-1466da83-7085-486a-a0e6-bd7cba2b963e.jpg",
},
    {url: "file:///storage/emulated/0/Android/data/com.escan/files/Pictures/image-1466da83-7085-486a-a0e6-bd7cba2b963e.jpg"}

];*/

export default class imageDetails extends PureComponent {

    state = {
        index: 0,
        modalVisible: true
    };

    render() {
        const {navigation} = this.props;
        //通过navigation.getParam来获取传递过来的参数
        const itemId = navigation.getParam('imgUrl', 'no-values');
        let ImageObjArray = [];
        for (let i = 0; i < itemId.key.length; i++) {
            let Obj = {};
            Obj.url = itemId.key[i].uri;
            this.state.index=i
            ImageObjArray.push(Obj)
        }
        return (
            <View
                style={{
                    padding: 10
                }}
            >
               <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => this.setState({modalVisible: false})}>
                    <ImageViewer
                        enableImageZoom={true}
                        onClick={()=>this.props.navigation.goBack()}
                        imageUrls={ImageObjArray} index={this.state.index}/>
                </Modal>
            </View>
        )
    }
}