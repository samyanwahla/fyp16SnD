import {Packages_Action,Packages_Status} from '../constants/packagesActions'
const initialState={
    packages_status:Packages_Status.SHOW
}

export default function(state=initialState,action){
    switch (action.type) {
        case Packages_Action.NEW:case Packages_Action.LOADNEW:
        return {...state,packages_status:Packages_Status.NEW}
        case Packages_Action.SHOW:case Packages_Action.LOADSHOW:
        return {...state,packages_status:Packages_Status.SHOW}
        case Packages_Action.SUCCESS:
        return {...state,packages_status:Packages_Status.SUCCESS}
           
    
        default:
        return {...state}
            
    }
}