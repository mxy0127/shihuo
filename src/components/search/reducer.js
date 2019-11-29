

const defaultState = {
    keyword:''
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case 'changeKeyword':
            return {
                keyword:action.keyword
            };
    
        default:return state;
    }
}