const Login = ()=> {
  const login = ()=>{
    console.log("SignUp");
  };
  
  return <button 
            onClick={login} 
            className="button" 
            type="button"
            name="login" 
            value="login" 
            >Login</button>
}
export default Login;