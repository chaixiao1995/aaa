import axios from 'axios'
import qs from 'qs';
import store from '@/js/store'

// import { MessageBox } from 'element-ui'
// import store from '../store'
// import { getUserId } from '@/utils/public'

// axios.defaults.timeout=8000;
//序列化json字符串
axios.interceptors.request.use((req) => {
    var token=sessionStorage.getItem('token');
    // if (req.method === 'post') {
    if(token){
        req.headers['token']=token;
        store.state.userInfo.token = token;
    }
    req.data = qs.stringify(req.data);
    // }
    return req;
}, (error) => Promise.reject(error));

export default axios;