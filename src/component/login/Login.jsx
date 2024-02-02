const Login = ()=> {
  const login = ()=>{
    console.log("SignUp");
  };
  
  return <button 
            onClick={login} 
            className="button" 
            type="button"
            name="login" 
            autofocus="true" 
            value="login" 
            formtarget="_blank">Login</button>
}
export default Login;