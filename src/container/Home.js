import React from 'react';
import Topbars from '../components/Topbars';
import House from '../components/House';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index'



class Home extends React.Component {
    componentDidMount = () => {
        const { Actions } = this.props;
        const mid = '123456';
        Actions.fetchroom(mid);
    }
    render() {
        const { room } = this.props
        const { router } = this.props
        return (
            <div className="Home">
                <Topbars router={router} />
                <House room={room} />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(actionCreators, dispatch),

    }
}

function mapStateToProps(state, ownProps) {
    const { room } = state
    return {
        room
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);