import React,{Component} from 'react'
import {Packages_Action,Packages_Status} from '../../../constants/packagesActions'
import CreatePackage from './createPackage'
import ShowPackages from './showPackage'
import { connect } from 'react-redux';
import Dashboard from '../dashboard/dashboard'
const mapStateToProps=state=>({
packages_Status:state.packages_Reducer.packages_status
})
const mapDispatchToProps=(dispatch)=>{
    return{
        createPackage:()=>{dispatch({type:Packages_Action.NEW})},
        showPackage:()=>{dispatch({type:Packages_Action.SHOW})},

    }
}
class PackagesView extends React.Component{
constructor(props){
    super(props);
}

getScreen(status){
    switch (status) {
        case Packages_Status.SHOW:
       return     <ShowPackages createPackage={this.props.createPackage}/>
       case Packages_Status.NEW:
       return     <CreatePackage showPackage={this.props.showPackage}/>
    default:
        
    }
}
render(){
    return(<div><Dashboard getScreen={this.getScreen(this.props.packages_Status)} /></div>)
}
}

export default connect(mapStateToProps,mapDispatchToProps)(PackagesView)