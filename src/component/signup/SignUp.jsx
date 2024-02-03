const SignUp = ()=> {
  const signup = ()=>{
    console.log("SignUp");
  };
  
  return  <button 
            onClick={signup} 
            className="button" 
            type="button" 
            name="signup"
            value="signup" 
            >Sign Up</button>
}
export default SignUp;