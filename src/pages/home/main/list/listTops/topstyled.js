import styled from 'styled-components'
export const Navwrap = styled.div`
    height:.4rem;
    ul{
        display:flex;
        flex-direction:row-gap;
        li{
            flex:1;
            line-height:.4rem;
            text-align:center;
            font-size:.13rem;
            color:#333333;
        }
        .active{
            color:#FF4338;
            position:relative;
            span{
                display:block;
                position:absolute;
                width:.16rem;
                height:100%;
                border-bottom:.02rem solid #FF4338;
                top:0;
                left:.29rem;
            }
        }
    }
`

export const Tabwrap = styled.div`
    ul{
        padding-top:.1rem;
        padding-bottom:.2rem;
        height:.56rem;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        li{
            width:.75rem;
            background-color:#f5f5f5;
            text-align:center;
            line-height:.26rem;
        }
        .active{
            background-color:#FF4338;
            color:#ffffff;
        }
    }
`