import axios from 'axios';
const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: API_DOMAIN + endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).then(res => {
            if (res.data.ret === 1) {
                return resolve(res);
            }
            return reject({ errMsg: res.data.errMsg });
        }).catch(err => {
            return reject({ errMsg: JSON.stringify(err) });
        });
    });
}
  
export default store => next => action => {
    if (!action.SERVER_API) {
        return next(action);
    }
    const {
        type,
        endpoint,
        params
    } = action.SERVER_API;
  

  
    next({
        type: `${type}_REQ`
    });

    callServerApi(endpoint, params)
    .then(res => {
        next({
            type: `${type}_SUC`,
            response: res.data
        });
    }).catch(err => {
        next({
            type: `${type}_FAI`,
            errMsg: err.errMsg
        });
    });
};