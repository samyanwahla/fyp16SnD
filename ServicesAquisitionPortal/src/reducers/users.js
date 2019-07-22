import {Users_Action,Users_Status} from '../constants/usersActions'
const initialState={
    users_status:Users_Status.SHOW
}
export default function(state=initialState,action){
    switch (action.type) {
        case Users_Action.NEW:
        return {...state,users_status:Users_Status.NEW}
        case Users_Action.SHOW:
        return {...state,users_status:Users_Status.SHOW}
        case Users_Action.SUCCESS:
        return {...state,users_status:Users_Status.SUCCESS}
           
    
        default:
        return {...state}
           
    }
}