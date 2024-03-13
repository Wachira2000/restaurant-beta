'use client'

import Image from "next/image";

const AboutSection = () => {
    return (
      <section className="w-full h-fit py-10 relative bg-gray-100 ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0 order-2 lg:order-1">
            <  Image src="/food2.png" alt="About" width={400}
				height={700} className="rounded-lg shadow-lg pt-7 pr-3" />
          </div>
          <div className="lg:w-1/2 lg:ml-8 order-1 lg:order-2">
            <h2 className="text-3xl text-black font-bold mb-4 px-3">About Us</h2>
            <h3 className="mb-4 px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec est in ex eleifend varius. Aliquam eget ex in ex laoreet fermentum. Nam lacinia suscipit nisl, sit amet laoreet lorem lacinia nec. Phasellus nec justo vel mi pellentesque volutpat. Vivamus convallis turpis ut augue facilisis pharetra. Phasellus at nunc odio. Integer feugiat, justo ut fringilla feugiat, sem turpis feugiat sapien, sit amet scelerisque est leo at justo. Duis vitae feugiat nulla, vitae posuere risus.
            </h3>
            <h4 className="mb-4 px-3">
              Donec nec consectetur purus. Nullam posuere lacus eget dapibus consequat. Aliquam erat volutpat. Duis pharetra hendrerit nisi vel laoreet. Nam pulvinar diam justo, id lacinia nulla posuere eu. Aenean varius ipsum a tellus euismod efficitur. Donec nec metus sit amet arcu dictum posuere sit amet vitae est. Cras sit amet urna a magna eleifend scelerisque nec a dolor.
            </h4>
            <h5 className="mb-4 px-3">
              Etiam non lectus ac tortor suscipit tristique id at nunc. Nullam tincidunt turpis eu sapien pharetra, ac viverra metus mattis. Integer quis mi convallis, vestibulum mauris sed, vulputate magna. Suspendisse potenti. Vestibulum ut quam id justo eleifend ullamcorper.
            </h5>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  
  

