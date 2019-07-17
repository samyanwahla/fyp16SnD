import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from './signin';
import SignUp from './signup';
import { account_Actions,account_Status } from '../../constants/account';

const mapStateToProps = (state) => {
    return {
        accoount_status: state.account_Reducer.accoount_status
    }
}

const mapDispatchToProps = dispatch => ({
    handleShowLogin: ()=>dispatch({type: account_Actions.LOGINSHOW}),
    handleShowSignup: ()=>dispatch({type: account_Actions.SIGNUPSHOW})
})

class AccountView extends Component {
constructor(props){
    super(props);
}

getscreen(componentstatus){
    switch(componentstatus){
    case account_Status.SIGNUPSHOW:
       return <SignUp handleShowLogin={this.props.handleShowLogin}/>
    
    case account_Status.LOGINSHOW:
        return <SignIn handleShowSignup={this.props.handleShowSignup}/>
    }
}

render(){
    return(<div>
        {this.getscreen(this.props.accoount_status)}</div>
    )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountView)