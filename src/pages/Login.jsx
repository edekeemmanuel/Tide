import Navbar from '../component/homepage/navbar/NavBar';
import Footer from '../component/homepage/footer/Footer.jsx';
import Forms from '../component/homepage/Form';
import imgLogin from "./../assets/images/sign-in-guy-img-01.png"
import Gimg from "./../assets/images/google (1).png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <>
    <Navbar primary={true} />
    <main className="py-[100px]">
      <div className="flex wrapper">
        <div>
          <div>
            <h1 className="font-heading"> Sign in to your account.</h1>
            <p>Build skills for today, tomorrow and beyond Education will help you to secure your future work opportunities.</p>
          </div>
          <div className="pt-14">
            <Forms />
          </div>
          <div className="flex flex-col">
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
            <button className=" bg-white border-[#0F172B] border-2 text-[#0F172B]  hidden md:block">
              <Link to="/"><img src={Gimg} />Login with Google</Link>
            </button>
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
