import axios from 'axios'

export function get(url,params){
    return axios.get(url,{params})
    .then(function(res){
        return res;
    })
}

export function post(url,params){
    axios.post(url)
    .then(function(res){
        return res;
    })
}