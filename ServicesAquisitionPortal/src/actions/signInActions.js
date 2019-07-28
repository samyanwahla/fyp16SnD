import store from '../store'
export const login=(username,password)=>dispatch=>{
   
    var user ={'username':username,'password':password}
    alert(user.username)
    const postRequest =  fetch('https://localhost:5001/api/Auth/login', {
          method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
           mode: 'cors',
        body:JSON.stringify(user)
     }).then((response)=>{
      console.log(response.status)
    alert('********'+response.statusText);
      response.json().then(data=>{
            //alert(data.userId);
        alert("data:......" + data.signInStatus )
    //   if(data.signInStatus=='failure'){
    //     store.dispatch({type:login_Actions.login_SignIn.FAILURE,payload:data});
    //     return ;
    //     }
    //   else if(data.signInStatus=='authorized') {
  
    //     store.dispatch({type:login_Actions.login_SignIn.AUTHORIZED,payload:data});
    //     return ;
    //   }
    //   else if(data.signInStatus == 'not_authorized'){
    //     store.dispatch({type:login_Actions.login_SignIn.NOT_AUTHORIZED,payload:data});
    //     return ;
    //   }
  
    //    });
    //  })
  
  
  //return {type:login_Actions.login_SignIn.NEW,payload:'none'};
      })
  })
}