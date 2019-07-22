import {SignIn_Action,SignIn_Status} from '../constants/signInActions'
const initialState={
    signIn_status:SignIn_Status.NEW
}
export default function(state=initialState,action){

    switch (action.type) {
        
        case SignIn_Action.NEW:
        
        return {...state,signIn_status:SignIn_Status.NEW}
      
        case SignIn_Action.SUCCESS:
        return {...state,signIn_status:SignIn_Status.SUCCESS}
       
    
        default:

        return {...state}
          
    }
}