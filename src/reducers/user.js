import * as ActionTypes from '../const/ActionTypes';
import pic from '../img/1.jpg';
const initState = {
    data: {
    id:'小AAA',
    pic:pic,
    tel:'18830296189',
    state:0,
    integral:'0',
    balance:'0.00',
    redbag:'0',
    crad:'0.00',
    }
}

export default function user(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_USER}_SUC`: {
            console.log('获取数据成功!')
            return state;
        }
        case `${ActionTypes.FETCH_USER}_FAI`: {
            console.log('后台数据通道已被关闭!')
            return state;
        }
        default:
            return state;
    }
}