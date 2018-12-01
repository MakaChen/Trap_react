import * as ActionTypes from '../const/ActionTypes';
import pic01 from '../img/room01.png';
import pic02 from '../img/room02.png';
import pic03 from '../img/room03.png';
const initState =
    {
        data:[
            {
                pic: pic01,
                area:'北京南站博爱医院双地铁角门西站一居',
                comment:'4.8分/20点评/一居/一床/宜2人居住/近北海北地铁站',
                introduce:'连住 闪灯 实拍 验真 免押金'
            },
            {
                pic: pic02,
                area:'金玉山庄:13号线北苑5号线鸟巢望京',
                comment:'5分/12点评 1居/2床/宜四人居住',
                introduce:'实拍 免押金'
            },
            {
                pic: pic03,
                area:'途家网严选|严选HOME 后海海景房',
                comment:'5分/12点评 1居/2床/宜四人居住',
                introduce:'实拍 免押金 闪订'
            },
        ]
    }


export default function room(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_ROOM}_SUC`: {
            console.log('获取数据成功!')
            return state;
        }
        case `${ActionTypes.FETCH_ROOM}_FAI`: {
            console.log('后台数据通道已被关闭!')
            return state;
        }
        default:
            return state;
    }
}