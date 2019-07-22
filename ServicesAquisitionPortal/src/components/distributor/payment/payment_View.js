import React, { Component } from "react";
import { connect } from "react-redux";
import {Payment_Action,Payment_Status} from '../../../constants/paymentActions'
import CheckOut from './checkOut'
import PaymentForm from './payment'
const mapStateToProps = (state) => {
    return {
        payment_status: state.payment_Reducer.payment_status
    }
}

const mapDispatchToProps = dispatch => ({
    handlePayemntMethod: ()=>dispatch({type: Payment_Action.PAYMENT}),
    
    handleSuccess: ()=>dispatch({type: Payment_Action.SUCCESS}),
    // handleShowSignup: ()=>dispatch({type: account_Actions.SIGNUPSHOW})
})

class paymentView extends Component {
constructor(props){
    super(props);
}

getscreen(componentstatus){
    switch(componentstatus){
    case Payment_Status.NEW:
    return <CheckOut handlePayemntMethod={this.props.handlePayemntMethod}
    handleSuccess={this.props.handleSuccess}/>
    case Payment_Status.PAYMENT:
        return <CheckOut handlePayemntMethod={this.props.handlePayemntMethod}
        handleSuccess={this.props.handleSuccess}/>
    case Payment_Status.SUCCESS:
            return <CheckOut handlePayemntMethod={this.props.handlePayemntMethod}
            handleSuccess={this.props.handleSuccess}/>
    
    }
}

render(){
    return(<div>
        {this.getscreen(this.props.payment_status)}
            </div>
    )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(paymentView)