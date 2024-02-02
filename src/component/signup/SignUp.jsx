const SignUp = ()=> {
  const signup = ()=>{
    console.log("SignUp");
  };
  
  return  <button 
            onClick={signup} 
            className="button" 
            type="button" 
            name="signup" 
            autofocus="true" 
            value="signup" 
            formtarget="_blank">Sign Up</button>
}
export default SignUp;