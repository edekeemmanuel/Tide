import { useEffect, useState } from 'react';
// import logo from '../assets/tv.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Bell from "./../../assets/svg/bell.svg";
import Logo from "./../../assets/svg/Logo.svg"
import User from "./../../assets/svg/user-circle.svg"
import Mic from "./../../assets/svg/mic.svg"
import Menu from "./../../assets/svg/menu.svg"

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  //const navigate = useNavigate();
  return (
    <nav>
      <div className="flex wrapper justify-between pt-7">
        <div className="flex">
          <a><img className="w-max" src={Logo} alt="#c4ae03"/></a>
        </div>
        <div className="flex items-center justify-center gap-x-4 pl-16">
          <a className="text-4xl">Categories</a>
          <div className="flex border-2 w-full border-neutral-500  rounded-full ">
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
              className="bg-transparent  py-[10px] focus:border-transparent focus-within:border-transparent px-4 w-full placeholder:text-lg placeholder:text-neutral-500"
              value={search}
              placeholder="What do you want to learn"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-4 ps-20 ">
          <a className="text-4xl ">My Classes</a>
          <div className="flex">
            <a><img className="size-9" src={Bell}  /></a>
            <a className="px-5"><img className="size-9" src={User} /></a>
            <a><img className="size-8" src={Mic}  /></a>
          </div>
        </div>
        <div>
            <button className="hidden pl-5" ><img className="size-12" src={Menu}/></button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
