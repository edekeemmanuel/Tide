import Navbar from '../component/homepage/navbar/NavBar';
import Footer from '../component/homepage/footer/Footer.jsx';
import Forms from '../component/homepage/Form';
import imgLogin from "./../assets/images/sign-up-girl-img-01.png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <>
    <Navbar primary={true} />
    <main className="">
      <div className="flex wrapper">
        <div>
          <div>
            <h1>Create an account.</h1>
            <p>Build skills for today, tomorrow and beyond Education will help you to secure your future work opportunities.</p>
          </div>
          <div>
            <Forms />
          </div>
          <div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <Link to="/">Login with Google</Link>
          </div>
          <div>
           <p>Don't have an account. <span><Link to="/register">Signup</Link></span>
           </p>
          </div>
        </div>
        <div>
          <div>
            <img src={imgLogin} />
          </div>
        </div>
      </div>
    </main>
    <Footer primary={true} />
  </>
  )
};
export default Login;
