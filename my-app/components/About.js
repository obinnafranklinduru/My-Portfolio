import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Communication Blockchain developer with hands-on experience with Front-end Web development, Blockchain, Smart Contract, and use cases such as NFTs, Defi, and DAOs. Experience writing code from scratch Thrive in environments where innovation and experimentation are encouraged, owning deadlines and striving for efficiency. Interested in exploring new ideas and providing new inspiration and thought-provoking concepts, possess experience in teamwork, problem-solving, and communication.
          </p>
          <div className='py-2 text-gray-600'>
            Open to work for the following:
            <ul>
              <li>Blockchain Developer (DApps) Intern/Entry-Level</li>
              <li>Solidity Developer - Intern/Entry-Level</li>
              <li>Smart Contract Developer - Intern/Entry-Level</li>
              <li>JavaScript Developer</li>
              <li>Front-end Developer</li>
            </ul>
          </div>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer hover:text-gray-900'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;