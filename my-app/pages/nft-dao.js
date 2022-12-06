import Image from 'next/image';
import React from 'react';
import DAOImg from '../public/assets/projects/DAO-NFT.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const DAO = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={DAOImg}
            alt='/'
          />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>DAO for NFT holders</h2>
          <h3>Next JS / React Js / Hardhat / Solidity</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <div>
            <p>Build a DAO for BinnaDevs NFT holders</p>
            <p>The Decentralized Autonomous Organization we built is an investment project. It used ETH to purchase third-party NFTs from a market, and the community of BinnaDevs NFT holders will decide which NFTs to purchase.</p>
            <ul>
              <li><b>Our Limitations:</b></li>
              <li>We have created a fake NFT marketplace; in the real world, you have to integrate with OpenSea for the DAO to buy NFTs from and have a large selection of NFTs to buy.</li>
              <li>Currently, we will not have a way to automate the DAO to distribute money if it makes a profit. The owner has to withdraw and do it manually.</li>
            </ul>
            <p> Contract Address: 0x75d2E690dFee1D78D93dcbd53412e7D93b61A436</p>
          </div>
          <Link
            href='https://github.com/obinnafranklinduru/NFT-DAO'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          <Link
            href='https://nft-dao-beta.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </Link>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Js 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hardhat
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default DAO;