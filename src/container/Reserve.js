import React from 'react';
import Topbar from '../components/Topbar';
import Contenttwo from '../components/Contenttwo';
import Bottom from '../components/Bottom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/index'



 class Reserve extends React.Component {
    componentDidMount = () => {
        const { Actions } = this.props;
        const mid='123456';
        Actions.fetchres(mid);
    }
    render() {
       const {reserve}=this.props
       const {dispatch}=this.props
        return (
            <div className="Reserve">
               <Topbar  /> 
               <Contenttwo reserve={reserve} dispatch={dispatch} />  
               <Bottom/>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(actionCreators, dispatch),
        dispatch
    }
}

function mapStateToProps(state, ownProps) {
    const {reserve}=state
    return {
        reserve,
    }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(Reserve);