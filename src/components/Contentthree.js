import React from 'react';
import './Contentthree.css';
import { notification } from 'antd';
import { Modal, Button } from 'antd';
import { Router, Route, IndexRedirect, browserHistory, IndexLink, Link } from 'react-router';
const confirm = Modal.confirm;
function warning() {
    Modal.warning({
        title: '查询明细请下载途家APP，小程序暂不支持查询！',
    });
}
function success() {
    Modal.success({
        title: '24小时国内客服：400-188-1234 ',
    });
}

function showConfirm() {
    confirm({
      title: '请确认是否退出登入？',
      onOk() {
        console.log('确认');
      },
      onCancel() {
        console.log('取消');
      },
      cancelText:'取消',
      okText:'确认',
    });
  }
export default class Contentthree extends React.Component {

    render() {
        const { user } = this.props;
        const usermsg = user.data;
        const state=usermsg.state;
        if(state==0){
            usermsg.state='普通会员'
        }
        else{
            usermsg.state='白金会员'
        }
        return (
            <div className="Contentthree">
                <div className="user-top">
                    <div className="user-picture"><img src={usermsg.pic} /></div>
                    <div className="user-tel">{usermsg.tel}</div>
                    <div className="user-state">{usermsg.state}</div>
                </div>
                <div className="nav">
                    <div className="nav-top">
                        <Link to='/Reserve'>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">全部订单</span>
                                <span className="icon"><img src={require('../img/6.png')} /></span>
                            </div>
                        </Link>
                        <div className="other-reserve">
                            <div className="no-cost">
                                <img src={require('../img/7.png')} />待支付
                                </div>
                            <div className="no-live">
                                <img src={require('../img/8.png')} />待入住
                             </div>
                        </div>
                    </div>
                    <div className="nav-middle">

                        <div className="integral" onClick={warning}>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">积分</span>
                                <span className="icon"><span className="user-all">{usermsg.integral}</span><img src={require('../img/6.png')} /></span>
                            </div>
                        </div>

                        <div className="balance" onClick={warning}>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">余额</span>
                                <span className="icon"><span className="user-all">￥{usermsg.balance}</span><img src={require('../img/6.png')} /></span>
                            </div>
                        </div>
                        <div className="redbag" onClick={warning}>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">红包</span>
                                <span className="icon"><span className="user-all">{usermsg.redbag}个</span><img src={require('../img/6.png')} /></span>
                            </div></div>
                        <div className="crad" onClick={warning}>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">涂游卡</span>
                                <span className="icon"><span className="user-all">￥{usermsg.crad}</span><img src={require('../img/6.png')} /></span>
                            </div>
                        </div>
                        <div className="service" onClick={success}>
                            <div className="all-reserve"><img src={require('../img/5.png')} /><span className="reserve-font">客服</span>
                                <span className="icon"><img src={require('../img/6.png')} /></span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-footer">
                        <button className="off-btn" onClick={showConfirm}>退出登入</button>
                    </div>
                </div>

            </div>
        )
    }
}


