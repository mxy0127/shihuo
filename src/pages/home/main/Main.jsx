import React, { Component } from 'react'
import Search from '../../../components/search/Search'
import {Mainwrap} from './mainstyled'
import Swiper from './swiper/Swiper'
import List from './list/List'
class Main extends Component {
    render() {
        return (
            <Mainwrap>
                <header>
                   <Search></Search> 
                </header>
                <Swiper></Swiper>
                <List></List>
            </Mainwrap>
        );
    }
}

export default Main;