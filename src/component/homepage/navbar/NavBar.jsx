import { useEffect, useState } from 'react';
// import logo from '../assets/tv.png';
import { AiOutlineSearch } from 'react-icons/ai';
// import { HiMiniBars2 } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="wrapper flex flex-col md:flex-row  w-full items-center  justify-between py-8">
        <div
          className="logo "
          onClick={() => {
            navigate('/');
          }}
        >
          Tide
        </div>
        <div className="flex items-center gap-8">
          <Link to="/categories" className=" font-medium hidden md:block">
            Categories
          </Link>
          <div className="flex border-2 border-[#0F172B] rounded-lg">
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
              className="bg-transparent  py-[10px] focus:border-transparent focus-within:border-transparent px-3 w-full placeholder:text-sm"
              value={search}
              placeholder="What do you want to learn"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex gap-4 text-white items-center">
          <button className=" bg-[#0F172B] hidden md:block">
            <Link to="/login">Login</Link>
          </button>
          <button className=" bg-white border-[#0F172B] border-2 text-[#0F172B]  hidden md:block">
            <Link to="/login">Register</Link>
          </button>
          <FaMicrophone className="text-3xl text-[#0F172B]" cursor="pointer" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
