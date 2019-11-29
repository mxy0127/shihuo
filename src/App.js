import React,{Component} from 'react';
import Layout from './pages/home/layout/Layout'
import Detail from './pages/detail/Detail'
import Search from './pages/search/Search'
import  { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'
import { Provider} from 'react-redux'
import store from '@store/store'
// import {get} from './util/http'
class App extends Component{
  // async componentDidMount(){

  //   let result = await get('/jssdk');
  //   let {
  //     appId,
  //     nonceStr,
  //     signature,
  //     timestamp
  //   } = result.data;
  //   window.wx.config({
  //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //     appId: appId, // 必填，公众号的唯一标识
  //     timestamp: timestamp, // 必填，生成签名的时间戳
  //     nonceStr: nonceStr, // 必填，生成签名的随机串
  //     signature: signature,// 必填，签名
  //     jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
  //   });
  // }

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/index' component={Layout}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/search' component={Search}></Route>
            <Redirect from='/' to='/index'></Redirect>
          </Switch>
        </BrowserRouter>
      </Provider>
      
    ); 
  }
}
  


export default App;
 