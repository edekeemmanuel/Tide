

import { useEffect, useState } from 'react';
// import logo from '../assets/tv.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import Logo from "../../assets/images/tide-logo-03.png"
import Bell from "../../assets/svg/bell.svg";
//import Logo from "./assets/Logo.svg"
import User from "../../assets/svg/user-circle.svg"
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";


const Navbar = (props) => {
  const styleCondition = props.primary ? "primary": "bg-primaryColor";
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className={`${styleCondition} text-white`}>
      <div className="wrapper flex flex-col md:flex-row  w-full items-center  justify-between pt-8 sm:pb-8">
        <div className="flex justify-between w-full md:w-fit mb-5 md:mb-0">
          <div
            className="ps-4"
            onClick={() => {
              navigate('/');
            }}
          >
            <img className="w-[100px] h-[50px]" src={Logo}/>
          </div>
          <div className=" md:hidden cursor-pointer  text-xl ">
            <FaBars />
          </div>
        </div>

        <div className="flex items-center w-full md:w-fit gap-8">
          <Link to="/categories" className=" text-xl hidden md:block">
            Categories
          </Link>
          <div className="flex border-2 w-full hover:border-neutral-500 border-neutral-500  rounded-full">
            <button
              className=" w-fit p-0"
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <AiOutlineSearch className="mx-6" />
            </button>
            <input
              type="text"
              className="bg-transparent  py-[10px] focus:border-neutral-50 focus-within:border-neutral-50 px-3 w-full placeholder:text-sm placeholder:text-neutral-50"
              value={search}
              placeholder="What do you want to learn"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex gap-4 text-white items-center">
          <a className="text-xl ">My Classes</a>
          <div className="flex">
          <Link to="/">
          <IoNotificationsSharp className="text-2xl text-neutral-50" cursor="pointer"/>
          </Link>
          <Link className="px-3" to="/">
          <FaUserCircle className="text-2xl text-neutral-50" cursor="pointer " />
          </Link>
          <Link to="/">
          <FaMicrophone className="text-2xl text-neutral-50" cursor="pointer" />
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

