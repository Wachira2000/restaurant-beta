"use client"

import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className="bg-gray-100 py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg text-center md:text-left md:mr-10 mb-10 md:mb-0">
        <h1 className="text-4xl text-black md:text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Enjoy the best food experience with us. We serve delicious dishes made with fresh ingredients.</p>
        <Link legacyBehavior href="/menu">
        <a className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md inline-block text-lg font-medium transition duration-300 ease-in-out">View Menu</a>
          </Link>
        </div>
        <div className="text-center md:text-left">
          <Image src="/food2.png" alt="food" width={100}
				height={100} className="w-48 h-48 md:w-96 md:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;