import React from 'react';
import './All.css';
import pic from '../img/cancel.png';
import { acSetChatMessages, setChatSelectIdx, add_fuceng } from '../actions/index';
export default class All extends React.Component {
    handleDeleteItem = (idx) => {
        const { reserve, dispatch } = this.props;
        const data = reserve.data
        const newdata = data.slice()
        newdata.splice(idx, 1)
        dispatch(acSetChatMessages(newdata))
    }
    Addfuceng = () => {
        const { dispatch, isActive, reserve } = this.props;
        const view = reserve.isActive
        dispatch(add_fuceng(view))
    }
    render() {
        const { reserve } = this.props;
        return (
            <div className="All">
                {
                    reserve.data.map((item, idx) => {
                        const statemsg = item.resstate
                        if (statemsg == 0) {
                            item.resstate = '待支付'
                        }
                        else if (statemsg == 1) {
                            item.resstate = '待入住'
                        }
                        return (
                            <div className="first-reserve" >
                                <div className="cancel"  ><img src={pic} key={idx} onClick={() => this.handleDeleteItem(idx)} /></div>
                                <div className="user-reserve-msg">
                                    入住人：{item.id}&nbsp;联系电话：{item.tel}&nbsp;{item.resstate}
                                </div>
                            </div>
                        )
                    })
                }
                <button className="add-fuceng-on" onClick={this.Addfuceng}>添加订单</button>
            </div>
        )
    }
}