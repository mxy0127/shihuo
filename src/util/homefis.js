import { get } from './http'

export function getNews(params){
    let url = '/api/homefis/getNews';
    return get(url,params)
}