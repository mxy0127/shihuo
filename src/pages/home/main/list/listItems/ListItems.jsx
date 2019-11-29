import React,{ useEffect,useState,useCallback } from 'react'
import { getNews } from '@util/homefis.js'
import { ListStyled } from './itemstyled'
function ListItems(props){
    const [list,setList] = useState([])
    useEffect( () => {
         (async()=>{
        let params = {
            pageSize: 20,
            type: props.selectedNav.type,
            channel_type: props.selectedTab.channel 
        }
        let rs =  await getNews(params); 
        setList(rs.data.data)
        })()
        
    },[props.selectedNav.type,props.selectedTab.channel]);

    const toDetail = useCallback((href)=>{
            window.location.href = href;
        
    },[])

    return (
        <ListStyled>
            <ul>
                {
                    list.map((value,index)=>{
                        return (
                            <li key={'识货app'+index} onClick={()=>{toDetail(value.data.href)}}>
                                <img src={value.data.img} alt=""/>
                                <div>
                                    <h2>{value.data.title}</h2>
                                    <h3>{value.data.subtitle?value.data.subtitle:''}</h3>
                                    <h4>{value.data.author_name?value.data.author_name:value.data.merchant}</h4>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </ListStyled>
    )
}
export default ListItems;