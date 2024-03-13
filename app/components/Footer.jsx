import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
      <Link legacyBehavior href="/">
        <a>
        <Image
				src="/logo.svg"
				width={100}
				height={100}
				alt="logo"
				  className='py-5'/>
                   </a>
            </Link>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center lg:justify-end space-x-4 lg:space-x-8 mb-4 lg:mb-0">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaFacebook className="text-white" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaTiktok className="text-white" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaInstagram className="text-white" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaWhatsapp className="text-white" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 rounded-full p-2">
            <FaYoutube className="text-white" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-center lg:text-right lg:ml-4 lg:order-2"> {/* Added lg:ml-4 and lg:order-2 */}
          &copy; {new Date().getFullYear()} Everest. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;




