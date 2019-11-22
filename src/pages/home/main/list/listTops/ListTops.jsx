import React from 'react';
import { Navwrap,Tabwrap } from './topstyled'
function ListTops(props) {
    return (
        <>
            <Navwrap>
                <ul>
                    {
                        props.navs.map((value,index)=>{
                            return (
                            <li 
                            key={value.name+index} 
                            className={value.name === props.selectedNav.name?'active':''}
                            onClick={()=>{props.changeNav(value)}}
                            >{value.name}<span></span></li>
                            )
                        })
                    }
                </ul>
            </Navwrap>
            <Tabwrap>
                <ul>
                    {
                        props.tabs.map((value,index)=>{
                            return (
                            <li 
                            key={value.name+index} 
                            className={value.name === props.selectedTab.name?'active':''}
                            onClick={()=>{props.changeTab(value)}}
                            >{value.name}<span></span></li>
                            )
                        }) 
                    }
                </ul>
            </Tabwrap>
        </>
    );
}

export default ListTops;