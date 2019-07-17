import {account_Actions,account_Status} from '../constants/account'
const initialState={
    accoount_status:account_Status.SIGNUPSHOW
}
export default function (state=initialState,action){
    // alert("from reducer ",action.type)
    switch(action.type){
    case account_Actions.LOGINSHOW:
        return {...state,accoount_status:account_Status.LOGINSHOW}
    case account_Actions.SIGNUPSHOW:
        return {...state,accoount_status:account_Status.SIGNUPSHOW}
    default :
        return {...state}
    }
}