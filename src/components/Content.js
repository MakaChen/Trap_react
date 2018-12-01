import React from 'react';
import './Content.css';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import { Router, Route, IndexRedirect, browserHistory, IndexLink, Link } from 'react-router';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
function onChange(value) {
    console.log('changed', value);
}
export default class Content extends React.Component {

    render() {
        const {user}=this.props;
        const usermsg=user.data
        return (
            <div className="Content">
                <div className="user-picture"><img src={`${usermsg.pic}`} /></div>
                <div className="user-welcome">你好哇，{`${usermsg.id}`}，很高兴遇见你</div>
                <div className="user-messages">
                    <div className="area-position">北京<span className="area"><img src={require("../img/3.png")} />我的位置</span></div>
                    <div className="data">
                        <RangePicker
                            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                            format={dateFormat}
                        />
                    </div>
                    <div className="number">共<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />人居住</div>
                    <div className="search"><Link to='/Home'><Button type="primary" className="button">查找美屋</Button></Link></div>
                </div>
            </div>
        )
    }
}