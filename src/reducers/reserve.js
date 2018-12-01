import * as ActionTypes from '../const/ActionTypes';
const initState =
    {
        data: [
            {
                id: '小AAA',
                tel: '18830296189',
                resstate: 0
            },
            {
                id: '小BBB',
                tel: '18830296189',
                resstate: 1
            },
            {
                id: '小CCC',
                tel: '18830296189',
                resstate: 0
            },
        ],
        isActive: false
    }


export default function reserve(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_RES}_SUC`: {
            console.log('获取数据成功!')
            return state;
        }
        case `${ActionTypes.FETCH_RES}_FAI`: {
            console.log('后台数据通道已被关闭!')
            return state;
        }
        case ActionTypes.SET_CHAT_MESSAGES:
            return {
                ...state,
                data: action.data,
            }
        case ActionTypes.ADD_FUCENG: {
            let newState = { ...state };
            newState.isActive = true;
            return newState
        }
        case "ADD_FUCENGOFF": {
            let newState = { ...state };
            newState.isActive = false;
            return newState
        }
        case "ADD_CONTENT": {
            const { content } = action
            console.log(action)
            let newState = { ...state };
            const messagesTmp = state.data.slice()/*拷贝函数，不改变原来对象 */
            messagesTmp.unshift({/*置顶 */
                id: content.id,
                tel: content.tel,
                resstate: 0
            })
            newState.data = messagesTmp
            return newState
        }
        default:
            return state;
    }
}