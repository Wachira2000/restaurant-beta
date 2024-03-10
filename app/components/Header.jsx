'use client'

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
		  <a>
		  <Image
				src="/logo.svg"
				width={100}
				height={100}
				alt="logo"
				/>
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 p-8 transition-all ${isOpen ? 'block' : 'hidden'}`}>
		<NavLink href="/" text="Home" onClick={toggleMenu} />
          <NavLink href="/menu" text="Menu" onClick={toggleMenu} />
          <NavLink href="/about" text="About" onClick={toggleMenu} />
          <NavLink href="/contact" text="Contact" onClick={toggleMenu} />
        </nav>
        <div className="md:flex md:ml-auto md:items-center hidden">
		<NavLink href="/" text="Home" />
          <NavLink href="/menu" text="Menu" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, text, onClick }) => (
  <Link legacyBehavior href={href}>
    <a className="text-white hover:text-gray-300 px-4 py-2 rounded-md block" onClick={onClick}>{text}</a>
  </Link>
);

export default Header;
