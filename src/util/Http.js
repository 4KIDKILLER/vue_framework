import axios from "axios";
import { PATH } from './Config';

/**
 * 网络请求 依赖[axios]
 * https://github.com/axios/axios
 * npm install axios --save 
 */
class Http {
    /**
     * POST请求
     * @param {String} url 请求url
     * @param {Object} data 请求数据 {key1:value1,key2:value2}
     * @param {function} callback 请求成功回调
     * @param {Object} headers 请求头
     * @param {Boolean} debug 是否开始调试
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    post = (url, data, callback, headers, debug) => {
        return this.request(url, data, 'POST', callback, headers, debug);
    }
    /**
     * GET请求
     * @param {String} url 请求url
     * @param {Object} data 请求数据 {key1:value1,key2:value2}
     * @param {function} callback 请求成功回调
     * @param {Object} headers 请求头
     * @param {Boolean} debug 是否开始调试
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    get = (url, data, success, headers) => {
        return this.request(url, data, 'GET', success, headers);
    }
    /**
     * 普通网络请求
     * @param {String} url 请求url
     * @param {Object} data 请求数据 (key1:value1,key2:value2)
     * @param {String} method 请求方式 (默认POST、GET)
     * @param {function} callback 请求成功回调
     * @param {Object} headers 请求头
     * @param {Boolean} debug 是否开始调试
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    request = (url, data, method, callback, headers, debug) => {
        method = method || 'post';
        let _headers = {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
            body = this._obj2formdata(Object.assign({
                'session_id': '123456',
                'user_id': '123456',
            }, data)),
            params = {};
        //合并请求头信息
        _headers = Object.assign(_headers, headers);
        if (method == "GET") {
            params = data;
        }
        if (debug) {
            console.log('debug: body- ', body);
            console.log('debug: params- ', params);
            console.log('debug: headers- ', headers);
        }
        //解析url
        url = this._parseUrl(url);
        //开始请求
        try {
            return axios({
                method: method,
                headers: _headers,
                url: url,
                data: body,
                params: params,
            }).then((response) => {
                if (Number(response.status) === 200) {
                    let result = this._fmtResultData(response);
                    if (false === result) {
                        return false;
                    }
                    return typeof callback === "function" && callback(result, response);
                }
                console.log('test', response);
                return response;
            }).catch((error) => {
                console.error('HTTP-001:', error);
            });
        } catch (error) {
            console.error('HTTP-002:', error);
            return false;
        }
    }
    _parseUrl = (url) => {
        let _url = PATH[url];
        if(_url===undefined){
            console.error("HTTP-003:Key '"+url+"' does not exist");
            return false;
        }
        return _url;
    }
    /**
     * 将无格式对象装化为FormData对象
     * @param {Objcect} data 
     * @return FormData
     */
    _obj2formdata = (data) => {
        let result = new FormData();
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'object' && data[key] instanceof Array) {
                data[key].forEach((item, index) => {
                    result.append(key + '[' + index + ']', item);
                })
            } else {
                result.append(key, data[key]);
            }
        });
        return result;
    }
    /**
     * 格式化响应数据
     * @param {any} response 响应数据
     * @returns {any}
     */
    _fmtResultData = (response) => {
        let result = response.data;
        if (typeof result !== "object") {
            try {
                result = result.replace(/(^\s*)|(\s*$)/g, "");
                result = JSON.parse(result)
            } catch (e) {
                result = {};
                return false;
            }
        }
        if (result.code !== undefined && result.code !== null && typeof result.code === 'string') {
            result.code = Number(result.code);
        }
        return result;
    }
}

export default new Http;