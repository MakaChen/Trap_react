import React from 'react';
import Topbar from '../components/Topbar';
import Contentthree from '../components/Contentthree';
import Bottom from '../components/Bottom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/index'



 class User extends React.Component {
    componentDidMount = () => {
        const { Actions } = this.props;
        const mid='123456';
        Actions.fetchuser(mid);
    }
    render() {
        const {user}=this.props;
        return (
            <div className="User">
               <Topbar  /> 
               <Contentthree user={user}/> 
               <Bottom/>
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
    const {user} = state
    return {
        user,
    }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(User);