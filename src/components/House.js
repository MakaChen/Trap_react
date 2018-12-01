import React from 'react';
import './House.css';
import pic from '../img/13.png';
export default class House extends React.Component {

    render() {
        const { room } = this.props;
        return (
            <div className="House">
                <div className="content-top">
                    <div className="search-box">
                        <div>
                            <input placeholder="地标/景点/关键词" className="search-input" />
                            <button className="search-font">搜索</button>
                        </div>
                    </div>
                    <div className="navs">
                        <div className="navs-first">9.7~9.8<img src={pic} /></div>
                        <div className="navs-first">位置<img src={pic} /></div>
                        <div className="navs-first">排序<img src={pic} /></div>
                        <div className="navs-first">筛选<img src={pic} /></div>
                    </div>
                </div>
                <div className="content-footer">
                    {room.data.map((item, idx) => {
                        return (
                            <div className="room-content">
                                <img src={item.pic}/>
                                <div className="area">{item.area}</div>
                                <div className="comment">{item.comment}</div>
                                <div className="introduce">{item.introduce}</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}