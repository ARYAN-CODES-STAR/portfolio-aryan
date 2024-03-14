import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aryan_pic from '@/assets/aryan_pic.png'; // Assuming 'aryan_pic.png' is in the correct location

const HomePage: React.FC = () => {
  return (
    <div
      data-name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <Image alt="Aryan's picture" className="rounded-2xl mx-auto w-2/3 md:w-full" src={aryan_pic} width={400} height={400} />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I &apos;m a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and designing software.
            I love to work on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>

          <div className="portfolio-btn">
            <Link
              href="portfolio"
              // duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          {/* <img
            src=""
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full w-[400] h-[400]"
          /> */}
          <Image
            src={aryan_pic}
            alt="Aryan&apos;s profile picture"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            className="hidden rounded-2xl absolute -right-6 -bottom-6 z-0 w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;