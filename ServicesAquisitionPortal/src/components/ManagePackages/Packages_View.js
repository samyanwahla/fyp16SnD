
import React, { Component } from "react";
import { connect } from "react-redux";

import CreatePackage from './CreatePackage'
import ShowPackages from './ShowPackages'
import PrimarySearchAppBar from './Appbar'
// import { loginServer } from '../../server/LoginServer';
import { Packages_Actions,Packages_Status } from '../../constants/packages';

const mapStateToProps=(state)=>{
    return {
    package_status:state.PackagesReducer.packages_status
    }
}

const mapDispatchToProps=dispatch=>({
    createPack:()=>dispatch({type:Packages_Actions.CREATEPACKAGE}),
    showPack:()=>dispatch({type:Packages_Actions.SHOWPACKAGE})
    })


class PackagesView extends Component {
constructor(props){
    super(props);
}


getscreen(componentstatus){
    switch(componentstatus){
    case Packages_Status.SHOWPACKAGE:
    return <ShowPackages createPack={this.props.createPack}/>
    
    case Packages_Status.CREATEPACKAGE:
    return <CreatePackage showPack={this.props.showPack}/>
    }
}
render(){
    return(<div>
          <PrimarySearchAppBar />  
        {this.getscreen(this.props.package_status)}</div>
    )
}
}

export default connect(mapStateToProps,mapDispatchToProps)(PackagesView)



