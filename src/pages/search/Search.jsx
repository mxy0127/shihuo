import React, { PureComponent } from 'react';
import SearchCpt from '@components/search/Search'
import { SearchWrap,BackCpt,SearchTop,SearchBottom } from './searchstyled'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSearch } from '@util/homefis.js'
// import { get } from 'http';
const  mapState = (state)=>{
    return {
        keyword:state.search.keyword
    }
}
class Search extends PureComponent {
    backRouter = ()=>{
        this.props.history.go(-1);
    }

    state={
        list:['']
    }
    async componentDidUpdate(){
        let rs = await getSearch({
            keywords:this.props.keyword
        })
        let isChange = this.pan(this.state.list,rs.data.data);
        if(!isChange){

         this.setState({
            list:rs.data.data
        })
        }
        
    }

    //判断一维数组是否相同
    pan(oldarr,newarr){
        let a = JSON.stringify(oldarr);
        let b = JSON.stringify(newarr);
        if(a === b){
            return true;
        }else{
            return false;
        }
    }

    render() {
        return (
            <SearchWrap>
                <SearchTop>
                    <SearchCpt></SearchCpt>
                    <BackCpt onClick={this.backRouter}>取消</BackCpt>
                </SearchTop>
                <SearchBottom>
                    <ul>
                        {
                            this.state.list.map((value,index)=>{
                                return (
                                <li key={value+index}>{value}</li>
                                )
                            })
                        }
                    </ul>
                </SearchBottom>
            </SearchWrap>
        );
    }
}

export default connect(mapState)(withRouter(Search));