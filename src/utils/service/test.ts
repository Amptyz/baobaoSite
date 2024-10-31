import {http} from './http'

const testRequest = async () => {
    const res = http.get('/test');
    return res;
}
export {testRequest};