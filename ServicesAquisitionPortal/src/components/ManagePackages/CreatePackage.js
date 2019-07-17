import React,{Component} from 'react'
//import 'materialize-css/dist/css/materialize.min.css'
export default function CreatePackage(props){
return (
<div>
    
    <h1>package creation component</h1>
<button onClick={()=>props.showPack()}> package</button>

<div class="input-field col s12 m6" style={{marginleft:'20px'}}>
    <select class="icons">
      <option value="" disabled selected>Choose your option</option>
      <option value="" data-icon="images/sample-1.jpg">example 1</option>
      <option value="" data-icon="images/office.jpg">example 2</option>
      <option value="" data-icon="images/yuna.jpg">example 3</option>
    </select>
    <label>Images in select</label>
  </div>
          
</div>
)

}

