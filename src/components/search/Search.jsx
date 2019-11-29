import React, { Component } from 'react';
import { Searchwrap } from './searchstyled';
import person from '@assets/images/person.png';
import search from '@assets/images/search.png';
import { withRouter } from 'react-router-dom';
import store from '@store/store'
class Search extends Component {
    static defaultProps = {
        context:'搜索商品,品牌',
        isShowProfile:true
    }
    toSearch = ()=>{
        this.props.history.push('/search')
    }
    inputChange(e){
        store.dispatch({
            type:"changeKeyword",
            keyword:e.target.value
        })
    }
    render() {
        return (
            <Searchwrap>
                <div className="leftwrap" onClick={this.toSearch}>
                    <div className="realsearch">
                        <span><img src={search} alt=""/></span>
                        <input type="text" placeholder={this.props.context}  onChange={this.inputChange}/>
                    </div>
                </div>
                {
                    this.props.isShowProfile &&  
                    <div className="rightwrap">
                        <img src={person} alt=""/>
                    </div>
                }
                
            </Searchwrap>
        );
    }
}

export default withRouter(Search);