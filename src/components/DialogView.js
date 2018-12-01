import React, { Component } from 'react';
import './DialogView.css';
import { add_fucengoff, add_content } from '../actions/index';
export default class DialogView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            tel: ''
        }
    }
    Addfucengoff = () => {
        const { dispatch, reserve, isACtive } = this.props;
        const view = reserve.isActive
        dispatch(add_fucengoff(view))
    }
    handleTitleadd = event => {
        this.setState({
            id: event.target.value,
        })
    }
    handleDesadd = event => {
        this.setState({
            tel: event.target.value,
        })
    }
    handlesubmitClick = () => {
        const { dispatch } = this.props
        const content = { "id": this.state.id, "tel": this.state.tel }
        dispatch(add_content(content))
    }

    render() {
        const { isActive, reserve } = this.props;
        const view = reserve.isActive
        if (!view) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.Addfucengoff}>关闭</div>
                <div className="dialog-ctn">
                        <div className="id_content">
                            入住人<input type="text" onChange={this.handleTitleadd} className="id_content_input" placeholder="入住人姓名"></input>
                        </div>
                        <div className="tel_content">
                            电话<input type="text" onChange={this.handleDesadd} className="tel_content_input" placeholder="预留电话"></input>
                        </div>
                        <div>
                            <button type="button" className="ensure_btn" onClick={this.handlesubmitClick}>确认添加</button>
                        </div>
                </div>
            </div>
        );
    }
}