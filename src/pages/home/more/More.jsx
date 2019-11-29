import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { MoreWrap } from './morestyled'
class More extends Component {

    csanCode(){
        window.wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
              console.log(result)
            }
          });
    }
    render() {
        return (
            <MoreWrap>
                <Button type="primary" onClick={this.csanCode}>扫描二维码</Button>
            </MoreWrap>
        );
    }
}

export default More;