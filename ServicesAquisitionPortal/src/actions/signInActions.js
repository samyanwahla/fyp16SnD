import store from '../store'
export function login(username,password){
   
    var user ={'Username':username,'Password':password}
    alert(user.Username)
    const postRequest =  fetch('https://localhost:44307/api/Auth/login', {
          method: 'POST',
          headers: {'Content-Type':'application/json;charset=UTF-8'},
           mode: 'cors',
          body: JSON.stringify(user)
     }).then((response)=>{
      
    alert('********'+response.responseCode);
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