import {Packages_Actions,Packages_Status} from '../constants/packages'
const initialState={
    packages_status:Packages_Status.CREATEPACKAGE
}
export default function (state=initialState,action){
    switch(action.type){
        case Packages_Actions.SHOWPACKAGE:
        return {...state,packages_status:Packages_Status.SHOWPACKAGE}
        case Packages_Actions.CREATEPACKAGE:
        return {...state,packages_status:Packages_Status.CREATEPACKAGE}
        default :
        return {...state}
    }
}