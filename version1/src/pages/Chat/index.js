import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import './index.scss'//引入的scss样式，下文中有

export default class Dialogue extends Component {
    IconFont = createFromIconfontCN({
        scriptUrl:"@/assets/img_1",
    });//创建IconFont 对象
    componentDidMount() {
        //这个方法是为了页面初始化的时候，用户看到的都是最后几条条消息
        if (this.messagesEnd) {
            const scrollHeight = this.messagesEnd.scrollHeight;//里面div的实际高度 
            const height = this.messagesEnd.clientHeight;  //网页可见高度  
            const maxScrollTop = scrollHeight - height;
            this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }
    componentDidUpdate() {
        //这个方法是为了页面更新的时候，用户看到的都是最后几条条消息
        if (this.messagesEnd) {
            const scrollHeight = this.messagesEnd.scrollHeight;//里面div的实际高度 
            const height = this.messagesEnd.clientHeight;  //网页可见高度 
            const maxScrollTop = scrollHeight - height;
            this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    }
    //点击聊天中的图片时，会在新窗口看到放大的图片，而不是缩略形式
    showImg = (src) => {
        return () => {
            const img = new window.Image();
            img.src = src;
            const newWin = window.open('');
            newWin.document.write(img.outerHTML);
            newWin.document.title = '图片展示'
            newWin.document.close();
        }
    }
    /**
     采用的思路：
     1、使用Grid栅格来保证双方聊天记录左右分布
     2、使用position（父组件PersonMessage.jsx传过来）这个变量来控制聊天记录显示的位置时左还是右
     **/
    render() {
        let message = this.props
        message = Object.values(message)
        const name = 'nickName'
        return (
            <div className='dialogue_all' ref={(el) => { this.messagesEnd = el; }} >
                {
                    message.map((m) => {
                        return <div key={m.id} style={{ width: '100%', 'padding': "20px 0px 20px 0px" }}>
                            <Row>
                                <Col span={12} style={{ visibility: m.position === 'left' ? 'visible' : 'hidden', width: '100%' }}>
                                    <div className='dialogue_div1'>
                                        <span className='dialogue_icon1' style={{ backgroundColor: m.color }}>
                                            <this.IconFont type={m.icon} className='messageItem_icon' />
                                        </span>
                                    </div>
                                    <div className='dialogue_div3'>
                                        <span style={{ margin: '9px 10px 9px 10px', display: 'block' }}>
                                            {
                                                m.info.map((content, i) => {
                                                    return (
                                                        <span key={i}>
                                                            {content.insert.image ? <img onClick={this.showImg(content.insert.image)} src={content.insert.image} style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} alt="" /> : <span>{content.insert}</span>}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </div>
                                </Col>
                                <Col span={12} style={{ textAlign: 'right', visibility: m.position === 'right' ? 'visible' : 'hidden', width: '100%' }} >
                                    <div className='dialogue_div2'>
                                        <span style={{ margin: '9px 10px 9px 10px', display: 'block', textAlign: 'left' }}>
                                            {
                                                m.info.map((content, i) => {
                                                    return (
                                                        <span key={i}>
                                                            {content.insert.image ? <img onClick={this.showImg(content.insert.image)} src={content.insert.image} style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} alt="" /> : <span>{content.insert}</span>}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </div>
                                    <div className='dialogue_div1'>
                                        <span className='dialogue_icon2' style={{ backgroundColor: '#007FE1' }}>
                                            <span style={{ fontSize: '16px', color: '#ffffff' }}>{name}</span>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    })
                }
            </div>
        )
    }
}

