import React from 'react';
import './Contenttwo.css';
import { Tabs } from 'antd';
import All from './All.js';
import DialogView from './DialogView.js';
import Nocost from './Nocost.js';
import Nolive from './Nolive.js';
const TabPane = Tabs.TabPane;
export default class Contenttwo extends React.Component {
    render() {
        const { reserve } = this.props;
        const { dispatch } = this.props;
        return (
            <div className="Contenttwo">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="全部" key="1">
                        <All reserve={reserve} dispatch={dispatch} />
                        <DialogView dispatch={dispatch} reserve={reserve} />
                    </TabPane>
                    <TabPane tab="待支付" key="2">
                        <Nocost reserve={reserve} />
                    </TabPane>
                    <TabPane tab="待入住" key="3">
                        <Nolive reserve={reserve} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}