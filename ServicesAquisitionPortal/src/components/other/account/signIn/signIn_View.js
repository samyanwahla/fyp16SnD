import React,{Component} from 'react'
import {SignIn_Actions,SignIn_Status} from '../../../../constants/signInActions'
import SignIn from './signIn'
import { connect } from 'react-redux';
import {login} from '../../../../actions/signInActions'
const mapStateToProps=state=>({
signIn_Status:state.signIn_Reducer.signIn_status
})
const mapDipatchToProps=(dispatch)=>{
    return {
        handleLogin:(username,password)=>{dispatch(login(username,password))}
    }
}
class SignInView extends Component{
constructor(props){
    super(props);
}

getScreen(status){
    //console.log(status)
    switch (status) {
        case SignIn_Status.NEW:
       return     (<SignIn handleLogin={this.props.handleLogin} />)
            break;
    
        default:
            break;
    }
}
render(){
    return(
        <div>{this.getScreen(this.props.signIn_Status)}</div>
    )
}
}
export default connect(mapStateToProps,mapDipatchToProps)(SignInView)