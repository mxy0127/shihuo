import { get } from './http'

export function getNews(params){
    let url = '/api/homefis/getNews';
    return get(url,params)
}
export function getSearch(params){
    let url = '/api/search/relatedKeywords';
    return get(url,params)
}
