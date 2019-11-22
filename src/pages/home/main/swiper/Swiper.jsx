import React, { Component } from 'react';
import { SwiperWrap } from './swiperstyled';
import { Carousel } from 'antd-mobile';
import swiper1 from '@assets/images/swiper1.png';
import swiper2 from '@assets/images/swiper2.png';
import swiper3 from '@assets/images/swiper3.png';
import swiper4 from '@assets/images/swiper4.jpg';
import swiper5 from '@assets/images/swiper5.jpg';
class Swiper extends Component {
    render() {
        return (
            <SwiperWrap>
                <Carousel
                autoplay={true}
                infinite={true}
                >
                    <img src={swiper1} alt=""/>
                    <img src={swiper2} alt=""/>
                    <img src={swiper3} alt=""/>
                    <img src={swiper4} alt=""/>
                    <img src={swiper5} alt=""/>
                </Carousel> 
                <div className="banner">广告</div>
            </SwiperWrap>
        );
    }
}

export default Swiper;