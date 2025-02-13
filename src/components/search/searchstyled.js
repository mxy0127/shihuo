import styled from 'styled-components'

export  const Searchwrap = styled.div`
    height:.46rem;
    display:flex;
    flex-direction:row;
    width:100%;
    .leftwrap{
        flex:1;
        padding:.1rem;
        .realsearch{
            height:.31rem;
            border-radius:5px;
            background-color:#fff;
            display:flex;
            flex-direction:row;
            span{
                width:31px;
                height:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                img{
                    display:block;
                    width:.2rem;
                }
            }
            input{
                flex:1;
                outline:none;
                border:none;
            }
        }
    }
    .rightwrap{
        width:.41rem;
        img{
            display:block;
            width:.29rem;
            margin-top:.1rem;
        }
    }
`