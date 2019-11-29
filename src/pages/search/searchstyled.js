import styled from 'styled-components'

export const SearchWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
`
export const BackCpt = styled.div`
    background:#F5F5F9;
    width:.5rem;
    height:.46rem;
    position:absolute;
    top:0;
    right:0;
    line-height:.46rem;
    text-align:center;
`
export const SearchTop = styled.div`
    height:.46rem;
    position:relative;
`
export const SearchBottom = styled.div`
    flex:1;
    background:#fff;
    ul{
        li{
            height:.43rem;
            line-height:.43rem;
            font-size:.15rem;
            margin: 0 .2rem;
            border-bottom:.01rem solid #eee;
        }
    }
`