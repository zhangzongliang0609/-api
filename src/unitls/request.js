import  vue  from  'vue'
import  axios from  'axios'
import qs from  "qs"
import {Message,Loading} from "element-ui";
axios.defaults.timeout=5*1000
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'

vue.prototype.$status=""
axios.defaults.baseURL="https://api.apiopen.top";
var loadingInstance
axios.interceptors.request.use(
    config=>{
        loadingInstance =Loading.service({
            lock:true,
            text:"数据加载中，你急个哈",
            spinner:"el-icon-loading",
            background:"rgba(0,0,0,0.7)"
        })
        if(config.method=='post'){
            config.data=qs.stringify(config.data)
        }
        return config
    },
    error => {
        loadingInstance.close()
        Message.error('请求错误')
        return Promise.reject(err)
    }
)
axios.interceptors.response.use(
    res=>{
        loadingInstance.close()
        return res
    },
    error => {
        loadingInstance.close()
        Message.error("请求失败，请稍后再试")
        return Promise.reject(err)
    }
)
export  function post(url,params) {
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then(res=>{
                resolve(res.data)
            },
            err=>{
                reject(err.data)
            }).catch(
            err=>{}
        )
    })
}
export  function get(url,params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {

        })
    })
}
export  function put(url,params) {
    return new promise((resolve,reject)=>{
        axios.put(url,{params:params}).then(
            res=>{
                resolve(res.data)
            }).catch(err=>{

        })
    })
}
