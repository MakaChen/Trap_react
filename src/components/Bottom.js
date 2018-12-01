import React from 'react';
import './Bottom.css';
import { Router, Route, IndexRedirect, browserHistory, IndexLink, Link } from 'react-router';


export default class Bottom extends React.Component {


    render() {
        return (
            <div className="Bottom">
                <Link to='/Op'>
                    <div className="Bottom-nav">
                        <img src={require("../img/9.png")} /><div className="s">首页</div>
                    </div>
                </Link>
                <Link to='/Reserve'>
                    <div className="Bottom-nav" >
                        <img src={require("../img/2.png")} /><div className="s" >订单</div>
                    </div>
                </Link>
                <Link to='/User'>
                    <div className="Bottom-nav">
                        <img src={require("../img/10.png")} /><div className="s">我的</div>
                    </div>
                </Link>
            </div>
        )
    }
}