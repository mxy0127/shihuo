import React, { Component } from 'react'
import ListTops from './listTops/ListTops'
import ListItems from './listItems/ListItems'
import { Listwrap } from './Liststyled'
class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            navs:[
                {type:'',name:'推荐'},
                {type:'basketball',name:'篮球'},
                {type:'running',name:'跑步'},
                {type:'fitness',name:'健身'},
                {type:'freestyle',name:'潮流'}
            ],
            tabs:[
                {channel:null,name:'全部'},
                {channel:11,name:'单品推荐'},
                {channel:12,name:'原创精选'},
                {channel:7,name:'用户晒物'}
            ],
            selectedNav:{type:'',name:'推荐'},
            selectedTab:{channel:null,name:'全部'}
        }
    }

    changeNav = (text)=>{
        this.setState({
            selectedNav:text,
            selectedTab:{channel:null,name:'全部'}
        })
    }
    changeTab = (text) =>{
        this.setState({
            selectedTab:text
        })
    }
    
    render() {
        return (
            <Listwrap>
                <ListTops {...this.state} changeNav={this.changeNav} changeTab={this.changeTab}></ListTops>
                <ListItems selectedNav={this.state.selectedNav} selectedTab={this.state.selectedTab}></ListItems>
            </Listwrap>
        );
    }
}

export default List;
