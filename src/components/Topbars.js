import React from 'react';
import './Topbars.css';
import pic from '../img/12.png';
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
export default class Topbars extends React.Component {
    goback = () => {
        const { router } = this.props
        router.goBack()
    }
    render() {
        return (
            <div className="Topbars">
                <div className="Topbars-font">
                    <img src={pic} onClick={this.goback} />途家-旅途中的家
                </div>
            </div>
        )
    }
}