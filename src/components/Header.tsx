import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { BsYoutube, BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiVideoAddLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-9 h-14 bg-[#0F0F0F] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-l-full rounded-r-full">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />

              <AiOutlineClose className="text-3xl h-6 w-6 cursor-pointer" />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            8+
          </span>
        </div>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQF_AlnT91RHYA/profile-displayphoto-shrink_400_400/0/1664254574473?e=1682553600&v=beta&t=LIQ_jzadS5B67ypcZR6cEPZ5ca9FQwmSuDLM-0sdm9w"
          className="w-9 h-9 rounded-full"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
