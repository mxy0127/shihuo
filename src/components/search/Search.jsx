import React, { Component } from 'react';
import { Searchwrap } from './searchstyled';
import person from '@assets/images/person.png';
import search from '@assets/images/search.png';
class Search extends Component {
    static defaultProps = {
        context:'搜索商品,品牌',
        isShowProfile:true
    }
    render() {
        return (
            <Searchwrap>
                <div className="leftwrap">
                    <div className="realsearch">
                        <span><img src={search} alt=""/></span>
                        <input type="text" placeholder={this.props.context}/>
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

export default Search;