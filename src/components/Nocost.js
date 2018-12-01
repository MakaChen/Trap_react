import React from 'react';
import './All.css';
import pic from '../img/cancel.png'
export default class Nocost extends React.Component {
    render() {
        const { reserve } = this.props;

        return (
            <div className="Nocost">
                {
                    reserve.data.map((item, idx) => {
                        const statemsg = item.resstate
                        if (statemsg == '待支付') {
                            return (
                                <div className="first-reserve">
                                <div className="cancel"><img src={pic}/></div>
                                    <div className="user-reserve-msg">
                                        入住人：{item.id}&nbsp;联系电话：{item.tel}&nbsp;{item.resstate}
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return null
                        }

                    })
                }
            </div>
        )
    }
}